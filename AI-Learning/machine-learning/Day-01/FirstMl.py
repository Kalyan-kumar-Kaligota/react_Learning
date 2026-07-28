from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression

experience = [[1], [2], [3], [4], [5]]
salary = [30000, 40000, 50000, 60000, 70000]

X_train, X_test, y_train, y_test = train_test_split(experience, salary, test_size=0.2, random_state=42)

model = LinearRegression()
model.fit(X_train, y_train)
predicted_salary = model.predict([[6]])
print(f"Predicted salary for 6 years experience is ₹{predicted_salary[0]:,.0f}")