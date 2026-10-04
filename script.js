const weeks = [
  ["Introduction to Java", "Introduction to Java installation, execution, and basic programming language comparisons.", "Language comparisons, JDK configuration, Hello World execution."],
  ["Java Fundamentals", "Perform foundational Java operations including variables, arithmetic, and control flow.", "Primitive data types, arithmetic operations, type casting, ASCII conversions, even/odd logic, loops."],
  ["Classes & Objects", "Understand class fundamentals, object declaration, and method implementation.", "Student/Employee systems, object references, arrays of objects, calculator methods, rectangle operations."],
  ["Constructors & Overloading", "Implement constructors, method overloading, and observe Garbage Collection.", "Default/parameterized constructors, constructor chaining, this keyword, overloading, Garbage Collection."],
  ["Objects & Static", "Work with objects as parameters/returns and understand static behavior.", "Passing/comparing objects, returning objects, static variables, static methods."],
  ["Final & Inner Classes", "Introduce the final keyword and implement various types of inner classes.", "Final variables/methods/classes, blank final variables, static and non-static inner classes."],
  ["Strings & Inheritance", "Explore String handling utilities and introduce basic inheritance.", "String constructors, literals, StringBuffer, StringTokenizer, basic inheritance."],
  ["Advanced Inheritance", "Implement advanced inheritance, method overriding, and Dynamic Method Dispatch.", "super keyword, multilevel inheritance, overriding, dynamic method dispatch."],
  ["Packages & Interfaces", "Organise and reuse Java code using packages and achieve abstraction with interfaces.", "Packages, access modifiers, CLASSPATH, interfaces, polymorphism, interface inheritance."],
  ["Exceptions & File I/O", "Practice error handling and file I/O operations in Java.", "try-catch, exception propagation, custom exceptions, byte-stream file manipulation."],
  ["File Handling & Threads", "Perform file handling and multithreading using character streams and the Thread class.", "Reader/Writer, FileReader, FileWriter, file copying, character/word/line counting, Thread, Runnable, join()."]
];

const container = document.getElementById("weeks");

weeks.forEach((week, i) => {
  const n = String(i + 1).padStart(2, "0");
  const card = document.createElement("article");
  card.className = "week";
  card.innerHTML = `
    <div class="week-head">
      <div class="week-number">${n}</div>
      <div>
        <h3>Week ${i + 1} — ${week[0]}</h3>
        <p class="aim"><strong>Aim:</strong> ${week[1]}</p>
      </div>
    </div>
    <div class="concepts"><strong>Concepts:</strong> ${week[2]}</div>
    <div class="actions">
      <a class="btn btn-primary" href="${pdfUrl(i + 1)}" target="_blank" rel="noopener">Open Document</a>
      <a class="btn btn-secondary" href="${pdfUrl(i + 1)}" target="_blank" rel="noopener" download>Download PDF</a>
    </div>
  `;
  container.appendChild(card);
});

function pdfUrl(weekNumber) {
  const filenames = {
    1: "week-01.pdf",
    2: "week-02.pdf",
    3: "week-03.pdf",
    4: "week-04.pdf",
    5: "week-05.pdf",
    6: "week-06.pdf",
    7: "week-07.pdf",
    8: "week-08.pdf",
    9: "Week-09.pdf",
    10: "week-10.pdf",
    11: "Week-11.pdf"
  };
  return `https://prazodsai.github.io/java-lab-record/${filenames[weekNumber]}`;
}
