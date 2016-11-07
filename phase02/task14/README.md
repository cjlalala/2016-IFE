遇到的问题：
（1）sort()方法：

　　sort() 方法用于对数组的元素进行排序，排序过程是在原数组上进行的，不生成副本。

　　A、如果调用该方法时没有使用参数，将按照字符编码的顺序进行排序。也就是说' [5,10,2].sort(); '的结果是[10,2,5]；

　　B、如果提供的有比较函数compareFunction()，那么数组会按照比较函数的返回值进行排序。

　　　　记 a 和 b 是两个将要被比较的元素，compareFunction(a,b)为比较函数的返回值

           若compareFunction(a,b)小于0，a前b后；
           若compareFunction(a,b)等于0， a 和 b 的位置不变;
           若compareFunction(a,b)大于0，b前a后。
　　    简化一下：比较函数中‘ return a-b; ’从小到大排序，‘ return b-a; ’从大到小排序。

（2）array.filter()  &  array.forEach()方法

　　array.filter在数组中的每个项上运行一个函数，并将函数返回真值的项作为数组返回。简单的说就是用一个条件过滤掉不符合的数组元素，剩下的符合条件的元素组合成新的数组返回。

　　array.forEach在数组中的每个项上运行一个函数。

　　具体请看：Javascript数组对象的方法（含jQuery 转载）

（3）性能问题

　　appendChild 和innerHTML的性能网上说法不一，有待测试！

 　  HTML DOM插入内容请看：HTML DOM
