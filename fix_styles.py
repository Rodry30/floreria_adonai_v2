import os
import re

ts_path = "src/app/pages/linea-base-costos/linea-base-costos.ts"
html_path = "src/app/pages/linea-base-costos/linea-base-costos.html"
css_path = "src/app/pages/linea-base-costos/linea-base-costos.css"

# 1. Update TS to include styleUrl
with open(ts_path, 'r', encoding='utf-8') as f:
    ts_data = f.read()

ts_data = ts_data.replace("templateUrl: './linea-base-costos.html',", "templateUrl: './linea-base-costos.html',\n  styleUrl: './linea-base-costos.css',")

with open(ts_path, 'w', encoding='utf-8') as f:
    f.write(ts_data)

# 2. Add styles to CSS
css_content = """
/* Cards */
.shadow-card {
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
  padding: 1.75rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.shadow-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04);
}

.custom-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
}

.custom-table th, .custom-table td {
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #e2e8f0;
  color: #334155;
}

.custom-table th {
  background-color: #f8fafc;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.05em;
  color: #475569;
}

.custom-table tr:last-child td {
  border-bottom: none;
}

.pill-id {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-weight: 700;
  letter-spacing: 0.05em;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
"""

with open(css_path, 'w', encoding='utf-8') as f:
    f.write(css_content)

# 3. Update HTML to fix dark colors
with open(html_path, 'r', encoding='utf-8') as f:
    html_data = f.read()

# Fix dark background in "Método: Estimación Ascendente"
html_data = html_data.replace(
    'bg-gradient-to-br from-slate-800 to-slate-900 text-white',
    'bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 text-slate-800'
)
html_data = html_data.replace(
    'bg-slate-700 rounded-xl',
    'bg-indigo-100 text-indigo-700 rounded-xl'
)
html_data = html_data.replace(
    'text-slate-100 m-0',
    'text-indigo-950 m-0'
)
html_data = html_data.replace(
    'text-slate-300 mb-6',
    'text-slate-700 mb-6'
)
html_data = html_data.replace(
    'bg-slate-950/50 border border-slate-700',
    'bg-white border border-indigo-200'
)
html_data = html_data.replace(
    'text-white block',
    'text-indigo-900 block font-bold'
)
html_data = html_data.replace(
    'bg-slate-800/80 p-3 rounded-lg border border-slate-700',
    'bg-white p-3 rounded-lg border border-indigo-100 shadow-sm'
)
html_data = html_data.replace(
    'text-slate-200',
    'text-slate-700 font-mono'
)

# Fix dark background in "Construcción del Presupuesto Autorizado"
html_data = html_data.replace(
    'bg-slate-900 rounded-3xl p-8 shadow-xl text-white',
    'bg-gradient-to-br from-teal-50 to-white rounded-3xl p-8 border border-teal-200 shadow-sm text-slate-800'
)
html_data = html_data.replace(
    'text-white mb-8 relative',
    'text-teal-950 mb-8 relative'
)
html_data = html_data.replace(
    'text-slate-300',
    'text-slate-700'
)
html_data = html_data.replace(
    'border-slate-800',
    'border-teal-100'
)
html_data = html_data.replace(
    'border-slate-700',
    'border-teal-200'
)
html_data = html_data.replace(
    'text-slate-400',
    'text-slate-500'
)
html_data = html_data.replace(
    'text-slate-200',
    'text-slate-800'
)
html_data = html_data.replace(
    'bg-teal-900/40',
    'bg-teal-100/50'
)
html_data = html_data.replace(
    'text-teal-300',
    'text-teal-900'
)
html_data = html_data.replace(
    'text-teal-400',
    'text-teal-700'
)
html_data = html_data.replace(
    'text-indigo-300',
    'text-indigo-800'
)
html_data = html_data.replace(
    'text-white drop-shadow-md',
    'text-indigo-900 drop-shadow-sm'
)

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(html_data)

