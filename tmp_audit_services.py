import re
import os

services_path = 'src/config/services.js'
data_path = 'src/config/serviceData.js'

with open(services_path, 'r', encoding='utf-8') as f:
    services_content = f.read()

with open(data_path, 'r', encoding='utf-8') as f:
    data_content = f.read()

# Extract keys from SERVICE_CANONICAL_MAP
# Match: 'Key Name': 'slug-name',
canonical_matches = re.findall(r"['\"]([^'\"]+)['\"]\s*:\s*['\"]([^'\"]+)['\"]", services_content)
canonical_map = {m[0]: m[1] for m in canonical_matches if 'SERVICE_CANONICAL_MAP' in services_content[:services_content.find(m[0])]}

# Extract keys from SERVICE_DATA_MAP
# Match: 'Key Name': {
data_matches = re.findall(r"['\"]([^'\"]+)['\"]\s*:\s*\{", data_content)
data_map = set(data_matches)

print("--- Data Integrity Audit ---")
print(f"Total entries in CANONICAL_MAP: {len(canonical_map)}")
print(f"Total entries in DATA_MAP: {len(data_map)}")

print("\n--- NOT FOUND SERVICES (Return 404 in [slug] page) ---")
missing_in_data = []
for title, slug in canonical_map.items():
    if title not in data_map:
        missing_in_data.append((title, slug))
        print(f"URL: /{slug}/ -> Missing data for '{title}'")

print("\n--- ORPHANED DATA (Present in data but missing from mapping) ---")
# Only check titles from the top level
for title in data_map:
    if title not in canonical_map:
        print(f"Title: '{title}'")
