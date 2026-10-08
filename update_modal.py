import re

with open('src/pages/Achievements.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace <button data-img-src="..." ...> with <button onClick={() => setModalImage('...')} ...>
content = re.sub(r'<button data-img-src="(.*?)"', r'<button onClick={() => setModalImage(\'\1\')}', content)

# Inject useState
content = content.replace('const Achievements = () => {', 'import { useState } from \'react\';\n\nconst Achievements = () => {\n    const [modalImage, setModalImage] = useState<string | null>(null);\n')

# Inject Modal JSX before </main>
modal_jsx = '''
            {/* Image Modal */}
            <div className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center transition-opacity duration-300 ${modalImage ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setModalImage(null)}>
                <div className="relative max-w-4xl max-h-[90vh] p-4 flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
                    <button onClick={() => setModalImage(null)} className="absolute -top-12 right-0 text-white hover:text-accent transition-colors p-2 z-50">
                        <i className="ph ph-x text-3xl"></i>
                    </button>
                    {modalImage && <img src={modalImage} alt="Achievement Details" className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl" />}
                </div>
            </div>
'''
content = content.replace('</main>', modal_jsx + '        </main>')

with open('src/pages/Achievements.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print('Achievements.tsx updated with modal')
