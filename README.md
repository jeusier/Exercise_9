Exercise_9
==========

## Object Oriented Programming -> part 1

Define 3 classes

###Person  
- name
- age
- gender
- growOld() sets age++


###Girl > Person
- gender = "female"
- talk(target) returns "[my name] is talking to [target]"

###Boy > Person
- gender = "male"
- walk(target) returns "[my name] is walking to [target]"

---

- instantiate 3 objects
    - create a boy, give him a name and age
    - create a girl, give her a name and age
    - create another boy, give him a name and age

- print the following results **on it's own line** in **#results**
    - boy1 + " is a " + boy1.age + " year old " + boy1.gender
    - girl1 + " is a " + girl1.age + " year old " + girl1.gender
    - boy2 + " is a " + boy2.age + " year old " + boy2.gender
    - boy1.walk(girl1.name)
    - girl1.talk(boy1.name)
    - boy2.walk(girl1.name)
    - girl1.talk(boy2.name)
    - boy1.walk("the arcade")
    - boy2.walk(boy1.name)
    - girl1.talk("herself")
    