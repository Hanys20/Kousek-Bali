"""Vybere původní vektorové ikonky z klientova návodu, beze změny kresby."""
from copy import deepcopy
from pathlib import Path
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parent.parent
NS = "http://www.w3.org/2000/svg"
ET.register_namespace("", NS)
source = ET.parse(ROOT / "client_materials/Grafické prvky/Příprava kakaa.svg").getroot()

# Indexy elementů a výřezy jsou pro dodané SVG Příprava kakaa.svg.
icons = {
    "odvaz": ([72, 73], "18 12 24 28"),
    "zahrej": (range(136, 147), "36 49 27 25"),
    "mleko": ([215], "18 86 27 28"),
    "vyslehej": (range(350, 356), "36 126 27 28"),
    "dochut": (range(216, 222), "20 164 22 28"),
}

for name, (indices, view_box) in icons.items():
    icon = ET.Element(f"{{{NS}}}svg", {"viewBox": view_box, "fill": "#000"})
    for index in indices:
        element = deepcopy(source[index])
        for child in element.iter():
            child.attrib.pop("class", None)
        icon.append(element)
    ET.ElementTree(icon).write(ROOT / f"public/icons/priprava-{name}.svg", encoding="utf-8", xml_declaration=True)
