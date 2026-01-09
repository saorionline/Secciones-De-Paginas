import requests

# Configuración de Headers para Notion API
headers = {
    "Authorization": "Bearer " + NOTION_TOKEN,
    "Notion-Version": "2022-06-28"
}

def send_to_notion(contact_name, match_score, tech_stack):
    url = "https://api.notion.com/v1/pages"
    
    payload = {
        "parent": { "database_id": PIPELINE_DB_ID },
        "properties": {
            "Name": { "title": [{ "text": { "content": contact_name } }] },
            "Match Score": { "number": match_score },
            "Status": { "select": { "name": "Nuevo" } },
            "Tech Stack": { "multi_select": [ {"name": tech} for tech in tech_stack ] }
        }
    }
    
    response = requests.post(url, json=payload, headers=headers)
    return response.status_code