abstract class Shape1 {
    abstract void area();
    abstract void perimeter();
}

class Circle1 extends Shape1 {
    double r;

    Circle1(double radius) {
        r = radius;
    }

    @Override
    void area() {
        System.out.println("Area of Circle: " + (3.14 * r * r));
    }

    @Override
    void perimeter() {
        System.out.println("Perimeter of Circle: " + (2 * 3.14 * r));
    }
}

class Triangle1 extends Shape1 {
    double a, b, c;

    Triangle1(double x, double y, double z) {
        a = x;
        b = y;
        c = z;
    }

    @Override
    void area() {
        double s = (a + b + c) / 2;
        double ar = Math.sqrt(s * (s - a) * (s - b) * (s - c));
        System.out.println("Area of Triangle: " + ar);
    }

    @Override
    void perimeter() {
        System.out.println("Perimeter of Triangle: " + (a + b + c));
    }
}

public class ShapeTest {
    public static void main(String[] args) {
        Circle1 c = new Circle1(5);
        c.area();
        c.perimeter();

        System.out.println();

        Triangle1 t = new Triangle1(3, 4, 5);
        t.area();
        t.perimeter();
    }
}


