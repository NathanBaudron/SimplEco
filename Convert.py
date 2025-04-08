with open("dictionnaire.txt", "r", encoding="utf-8") as f:
    mots = f.read().splitlines()

js_content = f'const dictionary = {mots};'

with open("dictionnaire.js", "w", encoding="utf-8") as f:
    f.write(js_content)

print("Fichier dictionnaire.js généré avec succès !")