import re

html_path = "src/app/pages/linea-base-cronograma/linea-base-cronograma.component.html"

with open(html_path, "r", encoding="utf-8") as f:
    content = f.read()

# Replace <div class="mermaid..." [innerHTML]="diagramXPdm"></div> 
# with <pre class="mermaid mermaid-scrollable">{{ diagramXPdm }}</pre>

content = re.sub(
    r'<div class="mermaid mermaid-scrollable" \[innerHTML\]="([^"]+)"></div>',
    r'<pre class="mermaid mermaid-scrollable">{{ \1 }}</pre>',
    content
)

with open(html_path, "w", encoding="utf-8") as f:
    f.write(content)
