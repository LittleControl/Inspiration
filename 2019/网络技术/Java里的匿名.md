# Java里有关匿名的一些笔记整理

刚开始学Java,对于匿名函数啥的一脸懵逼,这不最近又忘了嘛,这次直接把之前的笔记拿出来了  
果然好记性不如烂笔头

## 抽象类里的匿名

1. 非匿名抽象类的非匿名对象（正常默认的情况）

    ```Java
    package top.littlecontrol;

    public class NoName {
        public static void main(String[] args) {
            Ab2 ab2=new Ab2();
            ab2.sayName();//李
        }
    }
    abstract class Ab1{
        String name="李";
        abstract void sayName();
    }
    class Ab2 extends Ab1{

        @Override
        void sayName() {
            // TODO Auto-generated method stub
            System.out.println(this.name);
        }
    }
    ```

2. 非匿名抽象类的匿名对象

    ```Java
        new Ab2().sayName();//李
    ```

3. 匿名抽象类的非匿名对象

    ```Java
    Ab1 ab1=new Ab1() {
        @Override
        void sayName() {
            // TODO Auto-generated method stub
            System.out.println(this.name);
        }
    };
    ab1.sayName();//李
    ```

4. 匿名抽象类的匿名对象

    ```Java
    new Ab1() {
        @Override
        void sayName() {
            // TODO Auto-generated method stub
            System.out.println(this.name);
        }
    }.sayName();//李
    ```

## 接口里的匿名

1. 非匿名接口的非匿名对象

    ```Java
    package top.littlecontrol;
    public class NoName_interface {
        public static void main(String[] args) {
            Name n1=new ExName();
            n1.sayName();
        }
    }
    interface Name{
        String name="控";
        void sayName();
    }
    interface Age extends Name{
        int age=18;
        void sayAge();
    }
    class ExName implements Name,Age{

        @Override
        public void sayName() {
            System.out.println(name);
        }

        @Override
        public void sayAge() {
            System.out.println(age);
        }
    }
    ```

2. 非匿名接口的匿名对象

    ```Java
    new Name() {
        @Override
        public void sayName() {
            System.out.println(name);
        }
    }.sayName();
    ```

3. 匿名接口的非匿名对象

    ```Java
    Age a1=new Age() {
        @Override
        public void sayName() {
            System.out.println(name);
        }
        @Override
        public void sayAge() {
            System.out.println(age);
        }
    };
    a1.sayName();//控
    a1.sayAge();//18
    ```

4. 匿名接口的匿名对象

    ```Java
    new Age() {//匿名接口的匿名对象
        @Override
        public void sayName() {
            System.out.println(name);
        }
        @Override
        public void sayAge() {
            System.out.println(age);
        }
    }.sayName();//控
    ```
