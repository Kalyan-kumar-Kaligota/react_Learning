from sklearn.linear_model import LinearRegression

experience = [[1], [2], [3], [4], [5]]
salary = [25000, 28000, 43000, 69000, 108000]
salaryL1 = [25000, 50000, 75000, 100000, 125000]

model = LinearRegression()

model.fit(experience, salaryL1)

predicted_salary = model.predict([[6]])

print("Predicted Salary:", predicted_salary[0])

print("Slope (m):", model.coef_[0])
print("Intercept (c):", model.intercept_)