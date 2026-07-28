
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split

# Features
creditScore = [
    [550, 25000, 22, 1],
    [600, 30000, 24, 1],
    [650, 45000, 27, 0],
    [700, 50000, 30, 0],
    [720, 65000, 32, 0],
    [750, 80000, 35, 0],
    [800, 100000, 40, 0],
    [850, 120000, 45, 0]
]

# Labels
approved = [
    "No",
    "No",
    "No",
    "No",
    "Yes",
    "Yes",
    "Yes",
    "Yes"
]

model = LogisticRegression()
model.fit(creditScore, approved)

print('n_features_in_ exicuted',model.n_features_in_)
print("n_iter exicuted", model.n_iter_)
print("kalyan")
# Prediction
prediction = model.predict([[705, 70000, 31, 0], [705, 70000, 31, 1]])
prediction2 = model.predict_proba([[730,70000,31,0]])

X_train, X_test, y_train, y_test = train_test_split(
    creditScore,
    approved,
    test_size=0.2,
    random_state=42
)

model.fit(X_train, y_train)
prediction3 = model.score(X_test, y_test)
print("Loan Approved: 0 loans", prediction2[0])
print("Loan Approved:", prediction3)

print("!!!!-------=======---------!!!!!")


print("Loan proba: ",prediction2[0])
print("print scrore", prediction3)


print(model.classes_)
print(model.coef_)
print(model.intercept_)


print(model.get_params())


model.set_params(max_iter=500)

print(model.get_params())

print(model.get_params()["max_iter"])

model.set_params(
    max_iter=300,
    random_state=22
)

print(model.get_params())

model = LogisticRegression(
    max_iter=500,
    random_state=42,
    fit_intercept=False
)

print(model.get_params())

