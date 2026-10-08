import re
with open('src/pages/Achievements.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

count = content.count("\\'")
if count > 0:
    print(f'Found {count} literal backslash-quotes.')
    content = content.replace("\\'", "'")
    with open('src/pages/Achievements.tsx', 'w', encoding='utf-8') as f:
        f.write(content)
    print('Fixed them.')
else:
    print('None found.')
