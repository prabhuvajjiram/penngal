
import os
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse

base_url = "https://penngal.org"
download_folder = "penngal_downloads"

if not os.path.exists(download_folder):
    os.makedirs(download_folder)

def sanitize_filename(url):
    filename = os.path.basename(url.split("?")[0])
    return filename

def download_file(url):
    try:
        filename = sanitize_filename(url)
        file_path = os.path.join(download_folder, filename)
        if not os.path.exists(file_path):
            response = requests.get(url, stream=True)
            if response.status_code == 200:
                with open(file_path, "wb") as f:
                    for chunk in response.iter_content(1024):
                        f.write(chunk)
                print(f"Downloaded: {filename}")
            else:
                print(f"Failed to download {url} (status code {response.status_code})")
        else:
            print(f"Already exists: {filename}")
    except Exception as e:
        print(f"Error: {url} - {e}")

def scrape_site():
    response = requests.get(base_url)
    soup = BeautifulSoup(response.content, "html.parser")
    for tag in soup.find_all(["a", "img"]):
        if tag.name == "a" and "href" in tag.attrs:
            href = tag["href"]
            if href.endswith(".pdf"):
                download_file(urljoin(base_url, href))
        elif tag.name == "img" and "src" in tag.attrs:
            src = tag["src"]
            download_file(urljoin(base_url, src))

scrape_site()
