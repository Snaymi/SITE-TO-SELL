from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager

# Configurar o driver do Chrome
options = webdriver.ChromeOptions()
options.add_argument("--headless")  # Roda sem abrir janela
options.add_argument("user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64)")

# Inicializa o Chrome WebDriver
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)

# URL do produto na Shopee
url = "https://shopee.com.br/product/647213622/18299329462"
driver.get(url)

# Espera o elemento do preço carregar corretamente
try:
    preco_elemento = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.CLASS_NAME, "IZPeQz"))  # Substitua pela classe correta!
    )
    print("Preço encontrado:", preco_elemento.text)
except:
    print("Erro ao buscar o preço.")

driver.quit()
