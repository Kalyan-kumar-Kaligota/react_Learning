employee = [
    {
        "name" : "kalyan Kumar",
        "experience" : 3.5,
        "designation" : "Software Engineer"
    },
    {
        "name" : "Venkat Ramana",
        "experience" : 3,
        "designation" : "UI Developer"
    }
]

print("Employee Details:")
for emp in employee:
    print("Name:", emp["name"], "Experience:", emp["experience"], "years", "Designation:", emp["designation"])

    print(f"Employee {emp['name']} has {emp['experience']} years of experience.")