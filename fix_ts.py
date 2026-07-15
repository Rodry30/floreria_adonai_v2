import re

ts_path = "src/app/pages/linea-base-cronograma/linea-base-cronograma.component.ts"

with open(ts_path, "r", encoding="utf-8") as f:
    content = f.read()

exports = """  // Sprint 2
  readonly activities2      = SPRINT2_ACTIVITIES;
  readonly pertActivities2  = SPRINT2_PERT;
  readonly cpmActivities2   = SPRINT2_CPM;
  readonly diagram2Pdm      = DIAGRAM2_PDM;
  readonly diagram2Cpm      = DIAGRAM2_CPM;
  readonly diagram2Gantt    = DIAGRAM2_GANTT;

  // Sprint 3
  readonly activities3      = SPRINT3_ACTIVITIES;
  readonly pertActivities3  = SPRINT3_PERT;
  readonly cpmActivities3   = SPRINT3_CPM;
  readonly diagram3Pdm      = DIAGRAM3_PDM;
  readonly diagram3Cpm      = DIAGRAM3_CPM;
  readonly diagram3Gantt    = DIAGRAM3_GANTT;
"""

content = re.sub(
    r"  // Sprint 2\n  readonly activities2      = SPRINT2_ACTIVITIES;.*?readonly diagram2Gantt    = DIAGRAM2_GANTT;\n",
    exports,
    content,
    flags=re.DOTALL
)

with open(ts_path, "w", encoding="utf-8") as f:
    f.write(content)
