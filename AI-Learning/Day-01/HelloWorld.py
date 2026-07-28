print("Hello, world");



import turtle

t = turtle.Turtle()
t.speed(0)
t.left(90)

def tree(i):
    if i < 10:      # Stop when branch becomes very small
        return

    t.forward(i)

    t.color("green")
    t.dot(5)        # Leaf
    t.color("brown")

    t.left(20)
    tree(4 * i / 5)

    t.right(40)
    tree(4 * i / 5)

    t.left(20)
    t.backward(i)

tree(100)

turtle.done()