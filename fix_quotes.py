with open('src/pages/Achievements.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace literal \ followed by ' with just '
content = content.replace("\\'", "'")

with open('src/pages/Achievements.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print('Fixed literal backslash quotes in Achievements.tsx')
