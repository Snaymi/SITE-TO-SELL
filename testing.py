import requests
from bs4 import BeautifulSoup

url = "https://shopee.com.br/product/647213622/18299329462"

response = requests.get(url, headers = {"User-Agent": "Mozilla/5.0"})

if response.status_code == 200:
    soup = BeautifulSoup (response.text, 'html.parser')

    preco = soup.find("div", class_="flex flex-column IfdRIb")

    if preco: 
        print("Preço deste é: ",preco.text)
    else: 
        print("Não foi possivel buscar.")
else:
    print("ERRO")