import yaml

# Your YAML data
yaml_data = """
---
host: &host phl-42
datacenter:
  location: *host Philly
"""

# Load the YAML data using FullLoader
loaded_data = yaml.load(yaml_data, Loader=yaml.FullLoader)

# Access the location value
location_value = loaded_data['datacenter']['location']

# Use the value in your Python code
print("Location value:", location_value)