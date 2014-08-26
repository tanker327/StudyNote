#Interview questions

·         What is hashCode ?
    ** every class implicitly or explicitly provides a hashCode() method, which digests the data stored in an instance of the class into a single hash value (a 32-bit signed integer). 
·         What is deadlock?

·         What is race condition?
    ** A race condition occurs when two or more threads can access shared data and they try to change it at the same time. Because the thread scheduling algorithm can swap between threads at any time, you don't know the order in which the threads will attempt to access the shared data. Therefore, the result of the change in data is dependent on the thread scheduling algorithm, i.e. both threads are "racing" to access/change the data.

·         What is the default implementation of hashCode ?
    ** Then this class inherits hashCode from one of it's ancestors. If non of them overrides it, then Object.hashCode is used. As much as is reasonably practical, the hashCode method defined by class Object does return distinct integers for distinct objects. (This is typically implemented by __converting the internal address of the object into an integer__, but this implementation technique is not required by the JavaTM programming language.)

·         What is an enumeration?
    **  Enums are lists of constants

·         What are generics?
    *  Stronger type checks at compile time.
    *  Elimination of casts.
    *  Enabling programmers to implement generic algorithms.

·         What can you do in a generic class that you cannot do in a normal class?

·         In Java, can you create an instance of Object?

·         In Java, can you add a constructor to an interface?

·         Can you add a constructor to an abstract class?

·         In java, what is the difference btw a string and a stringbuffer?

·         In java, what is the main difference between a HashMap and HashTable?

·         In java, in what context would you use the runnable interface?

·         In java, can you add a member variable to an interface? How?

·         In java, what class does exception inherit from?

·         In java, name two sub classes of throwable?

·         How do you prevent multiple threads from accessing the same function at the same time?
