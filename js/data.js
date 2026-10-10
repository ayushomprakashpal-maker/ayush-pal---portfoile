// Data copied from the "Pivot Tables" sheet of Hospital_Patient_Analysis.xlsx
const HOSPITAL = {
  kpi: { patients: 180, cost: 8552731, stay: 8.2, wait: 82.8, avgCost: 47515 },
  pivots: {
    "Department": { labels: ["Cardiology","Dermatology","Emergency","General Medicine","Neurology","Oncology","Orthopedics","Pediatrics"],
      "Patients":[31,26,27,14,27,25,11,19], "Total cost (₹)":[1320561,1134480,1605372,869425,1215800,1125037,526277,755779],
      "Avg stay (days)":[7.6,8.3,9.5,11.2,7.6,7.4,7.4,7.2], "Avg wait (min)":[86.7,77.1,77.4,83.9,89,77.2,82.9,89.2] },
    "Admission type": { labels: ["Elective","Emergency","Urgent"],
      "Patients":[66,59,55], "Total cost (₹)":[3009416,2819634,2723681], "Avg stay (days)":[8.2,8.1,8.3], "Avg wait (min)":[78.4,75.3,96] },
    "Insurance": { labels: ["Corporate","Government","Private","Self-Pay"],
      "Patients":[33,56,45,46], "Total cost (₹)":[1450451,2774522,2156902,2170856], "Avg cost (₹)":[43953.1,49545,47931.2,47192.5] },
    "Age group": { labels: ["Child","Teen","Young Adult","Adult","Senior","Elderly"],
      "Patients":[32,13,37,24,36,38], "Total cost (₹)":[1593381,527202,1743483,976067,1800874,1911724], "Avg stay (days)":[8.4,7.5,8.4,7.2,7.9,8.9] },
    "Outcome": { labels: ["Discharged","Follow-up","Transferred"],
      "Patients":[115,29,36], "Avg stay (days)":[8,9.8,7.5], "Avg cost (₹)":[46696.8,51684.2,46771.1] },
    "Gender": { labels: ["Female","Male"],
      "Patients":[87,93], "Total cost (₹)":[4542440,4010291], "Avg stay (days)":[9,7.4] }
  },
  insights: [
    "Cardiology has the highest patient count with 31 patients.",
    "Emergency has the highest total treatment cost at about ₹16,05,372.",
    "Pediatrics has the longest average wait at about 89.2 minutes.",
    "Urgent admissions have the longest average stay (about 8.3 days) and the longest wait (96 min).",
    "Government-insured patients have the highest average treatment cost at about ₹49,545.",
    "Discharged is the most common outcome with 115 of 180 patients."
  ]
};
