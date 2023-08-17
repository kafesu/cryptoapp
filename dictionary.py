from requests import get

print("Welcome to Dictionary. Powered by DictionaryAPI.dev")
print("Enter -1 to exit")

while True:
    word = input("Enter a word: ")

    if word == "-1":
        break

    URL = f"https://api.dictionaryapi.dev/api/v2/entries/en/{word}"

    response = get(URL, timeout=10000)

    for meaning in response.json()[0]['meanings']:
        print(meaning['partOfSpeech'] + ": " + meaning['definitions'][0]['definition'])

print("Goodbye")
