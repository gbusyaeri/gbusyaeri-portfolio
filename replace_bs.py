with open('src/pages/Achievements.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

text = text.replace("\\'", "'")
with open('src/pages/Achievements.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
print("Done replacing.")
