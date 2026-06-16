import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { a as Route$2, u as useAuth } from "./router-ByG2qC2K.mjs";
import { s as supabase } from "./client-DgwI37i9.mjs";
import { N as Navbar } from "./Navbar-B5CH4wKn.mjs";
import { B as Button } from "./button-B4zLVkYW.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { a as CircleX, f as Award, C as CircleCheck, w as Clock } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const questionBank = {
  "full-stack": [
    { question: "Which HTTP method is typically used to read a resource without changing it?", options: ["GET", "POST", "PUT", "DELETE"], correctIndex: 0 },
    { question: "What does the HTTP status code 201 usually mean?", options: ["Resource created", "Unauthorized", "Server error", "Request timeout"], correctIndex: 0 },
    { question: "What is the main purpose of middleware in an Express app?", options: ["Handle requests between client and route", "Store data in the database", "Compile CSS", "Render PDF files"], correctIndex: 0 },
    { question: "Where should secrets like API keys normally be stored in a project?", options: ["Environment variables", "Inside JSX", "In README files", "In route names"], correctIndex: 0 },
    { question: "What does CORS control?", options: ["Cross-origin browser requests", "Code formatting rules", "CSS layout flow", "Database indexing"], correctIndex: 0 },
    { question: "Which practice helps reduce duplicated data in relational databases?", options: ["Normalization", "Minification", "Pagination", "Hydration"], correctIndex: 0 },
    { question: "Which token type is commonly used for stateless authentication?", options: ["JWT", "CSV", "PNG", "HTML"], correctIndex: 0 },
    { question: "Which request method is usually used to create a new resource?", options: ["POST", "GET", "TRACE", "HEAD"], correctIndex: 0 },
    { question: "What does SSR stand for?", options: ["Server-side rendering", "Secure session routing", "Static site refresh", "Script source registry"], correctIndex: 0 },
    { question: "Which file is commonly used to store local configuration values?", options: [".env", "index.html", "package-lock.json", "vite.config.ts"], correctIndex: 0 },
    { question: "What is the main purpose of hashing passwords?", options: ["Store passwords securely", "Make passwords shorter", "Speed up CSS", "Create API routes"], correctIndex: 0 },
    { question: "Which HTTP header usually carries a bearer token?", options: ["Authorization", "Content-Type", "Accept", "Origin"], correctIndex: 0 },
    { question: "Which of these is part of CRUD?", options: ["Create", "Compile", "Cache", "Connect"], correctIndex: 0 },
    { question: "What does an API endpoint usually represent?", options: ["A specific URL for a resource or action", "A database table name", "A CSS selector", "A browser tab"], correctIndex: 0 },
    { question: "Which HTTP method is typically used to replace an existing resource?", options: ["PUT", "GET", "PATCH", "OPTIONS"], correctIndex: 0 },
    { question: "What is caching mainly used for?", options: ["Speeding up repeated reads", "Encrypting files", "Creating new tables", "Forcing logouts"], correctIndex: 0 },
    { question: "Which testing approach checks multiple layers working together?", options: ["Integration testing", "Color testing", "A/B styling", "Visual linting"], correctIndex: 0 },
    { question: "What does SPA mean?", options: ["Single-page application", "Server processing adapter", "Style palette area", "Secure protocol access"], correctIndex: 0 },
    { question: "Which HTTP method should generally be safe and idempotent for reads?", options: ["GET", "POST", "PATCH", "DELETE"], correctIndex: 0 },
    { question: "What is the main job of a backend API in a full stack app?", options: ["Expose business data and logic to the frontend", "Only draw icons", "Store HTML in the browser", "Replace user authentication"], correctIndex: 0 }
  ],
  mern: [
    { question: "What does MERN stand for?", options: ["MongoDB, Express, React, Node", "MySQL, Express, Redux, Next", "Mongo, Electron, Ruby, Nginx", "Material, HTML, React, Node"], correctIndex: 0 },
    { question: "Which part of MERN is used for the UI?", options: ["React", "Node", "Express", "MongoDB"], correctIndex: 0 },
    { question: "Which part of MERN is the server runtime?", options: ["Node.js", "React", "MongoDB", "Redux"], correctIndex: 0 },
    { question: "Which package is commonly used with MongoDB for schemas and models?", options: ["Mongoose", "Axios", "Tailwind", "Jest"], correctIndex: 0 },
    { question: "What is the purpose of Express?", options: ["Build backend routes and middleware", "Render browser-only components", "Store images", "Replace MongoDB"], correctIndex: 0 },
    { question: "What kind of database is MongoDB?", options: ["NoSQL document database", "Relational spreadsheet", "Graphical editor", "File compressor"], correctIndex: 0 },
    { question: "What does a Mongoose schema define?", options: ["The structure of a document", "The color theme", "The browser route", "The CSS grid"], correctIndex: 0 },
    { question: "Which HTTP concept is MERN apps often built around?", options: ["REST APIs", "FTP shares", "SMTP relays", "SSH tunnels"], correctIndex: 0 },
    { question: "Which React feature is used to manage state inside a component?", options: ["useState", "useRoute", "useFetch", "useSchema"], correctIndex: 0 },
    { question: "What does middleware do in Express?", options: ["Processes requests before they reach the route handler", "Creates Mongo indexes only", "Builds the React bundle", "Draws charts on the page"], correctIndex: 0 },
    { question: "Which tool is commonly used for authentication tokens in MERN apps?", options: ["JWT", "SVG", "CSV", "ZIP"], correctIndex: 0 },
    { question: "Which method is commonly used to read all documents from a Mongo collection?", options: ["find()", "save()", "push()", "render()"], correctIndex: 0 },
    { question: "What does the React Router library help with?", options: ["Client-side navigation", "Database migration", "Password hashing", "Image compression"], correctIndex: 0 },
    { question: "Which feature helps split logic into reusable request handlers in Express?", options: ["Route handlers", "Keyframes", "Interfaces", "Hooks"], correctIndex: 0 },
    { question: "What does async/await improve in JavaScript backend code?", options: ["Working with promises", "CSS specificity", "Image loading only", "HTML nesting"], correctIndex: 0 },
    { question: "Which MongoDB feature is useful for updating nested documents?", options: ["Dot notation", "Float layout", "Shadow DOM", "Media query"], correctIndex: 0 },
    { question: "Which file usually starts a Node.js app?", options: ["server.js or index.js", "index.css", "logo.png", "vite.svg"], correctIndex: 0 },
    { question: "Why do MERN apps often use JSON?", options: ["It is easy to exchange data between client and server", "It is required for CSS", "It replaces HTML", "It encrypts traffic"], correctIndex: 0 },
    { question: "What is the main purpose of controllers in many MERN architectures?", options: ["Keep request logic organized", "Store browser cookies", "Generate icons", "Write SQL joins"], correctIndex: 0 },
    { question: "Which layer usually talks directly to the MongoDB database?", options: ["Backend server", "React component", "Browser address bar", "CSS file"], correctIndex: 0 }
  ],
  frontend: [
    { question: "Which tag is used for the largest heading in HTML?", options: ["<h1>", "<h6>", "<head>", "<title>"], correctIndex: 0 },
    { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Creative Style Syntax", "Central Script System", "Component Style Sheet"], correctIndex: 0 },
    { question: "Which layout system is best for two-dimensional grids?", options: ["CSS Grid", "Float only", "Table rows", "Inline-block"], correctIndex: 0 },
    { question: "What does Flexbox mainly help with?", options: ["Aligning items in one direction", "Writing JavaScript functions", "Handling database records", "Creating HTTP headers"], correctIndex: 0 },
    { question: "Which CSS property changes the text color?", options: ["color", "font-style", "padding", "opacity"], correctIndex: 0 },
    { question: "What is a semantic HTML element?", options: ["An element that describes its meaning", "An element with more CSS", "An element that runs JavaScript", "An element with no closing tag"], correctIndex: 0 },
    { question: "Which event bubbles up through the DOM by default?", options: ["Click events", "Network errors", "CSS transitions", "Image load time"], correctIndex: 0 },
    { question: "What does responsive design aim for?", options: ["Good layout across screen sizes", "Only mobile screens", "Only large monitors", "Faster database queries"], correctIndex: 0 },
    { question: "Which media feature is commonly used for responsive breakpoints?", options: ["@media", "@font-face", "@keyframes", "@supports"], correctIndex: 0 },
    { question: "What is the purpose of the z-index property?", options: ["Control stacking order", "Change font family", "Move text to the left", "Increase page speed"], correctIndex: 0 },
    { question: "Which CSS selector has higher specificity than a class selector?", options: ["ID selector", "Type selector", "Universal selector", "Descendant selector"], correctIndex: 0 },
    { question: "What is the DOM?", options: ["Document Object Model", "Data Output Module", "Dynamic Object Map", "Design Order Method"], correctIndex: 0 },
    { question: "Which JavaScript method converts JSON text into an object?", options: ["JSON.parse()", "JSON.stringify()", "Object.create()", "Array.join()"], correctIndex: 0 },
    { question: "What does debounce help with?", options: ["Reducing repeated function calls", "Sorting tables", "Creating routes", "Changing colors"], correctIndex: 0 },
    { question: "Which attribute is used for accessible alternative text on images?", options: ["alt", "role", "title", "aria"], correctIndex: 0 },
    { question: "What is the default position value in CSS?", options: ["static", "absolute", "relative", "fixed"], correctIndex: 0 },
    { question: "Which element is used to create a hyperlink?", options: ["<a>", "<link>", "<href>", "<nav>"], correctIndex: 0 },
    { question: "What does a CSS variable start with?", options: ["--", "$$", "##", "@@"], correctIndex: 0 },
    { question: "Which approach usually improves mobile usability first?", options: ["Mobile-first design", "Fixed-width design", "Print layout", "Desktop-only layout"], correctIndex: 0 },
    { question: "What is the main purpose of a frontend bundle?", options: ["Package client code for the browser", "Store SQL backups", "Create user accounts", "Run database migrations"], correctIndex: 0 }
  ],
  react: [
    { question: "What is React mainly used for?", options: ["Building user interfaces", "Managing SQL tables", "Running Linux commands", "Compressing images"], correctIndex: 0 },
    { question: "What is a React component?", options: ["A reusable piece of UI", "A database column", "A CSS media query", "A browser tab"], correctIndex: 0 },
    { question: "Which hook is used to store local state?", options: ["useState", "useMemo", "useRef", "useEffect"], correctIndex: 0 },
    { question: "Which hook is commonly used for side effects?", options: ["useEffect", "useState", "useReducer", "useContext"], correctIndex: 0 },
    { question: "Why are keys important in lists?", options: ["They help React identify items efficiently", "They encrypt props", "They change CSS order", "They block rerenders"], correctIndex: 0 },
    { question: "What does lifting state up mean?", options: ["Moving shared state to a common parent", "Changing the theme color", "Deleting unused components", "Turning state into props"], correctIndex: 0 },
    { question: "What does useContext help with?", options: ["Sharing data without prop drilling", "Fetching images", "Writing reducers", "Measuring performance"], correctIndex: 0 },
    { question: "Which pattern keeps an input value controlled by React state?", options: ["Controlled component", "Static component", "Lazy fragment", "Virtual hook"], correctIndex: 0 },
    { question: "What does useMemo do?", options: ["Memoizes an expensive calculation result", "Creates a DOM node", "Changes route paths", "Saves form data to localStorage"], correctIndex: 0 },
    { question: "What does useCallback return?", options: ["A memoized function reference", "A JSX element", "An API response", "A CSS class"], correctIndex: 0 },
    { question: "What is the purpose of React.Fragment?", options: ["Group children without adding extra DOM nodes", "Fetch data automatically", "Create animations", "Store component state"], correctIndex: 0 },
    { question: "What usually triggers a rerender in React?", options: ["State or props change", "Hovering a button", "Opening DevTools", "Adding comments"], correctIndex: 0 },
    { question: "Which file extension is common for React components in this project?", options: [".tsx", ".sql", ".png", ".md"], correctIndex: 0 },
    { question: "What does conditional rendering allow?", options: ["Showing UI based on conditions", "Only one component per app", "Changing the server IP", "Blocking API calls"], correctIndex: 0 },
    { question: "What is the role of props?", options: ["Pass data from parent to child", "Store data globally", "Style buttons", "Create database indexes"], correctIndex: 0 },
    { question: "What is reconciliation in React?", options: ["Updating the UI by comparing trees", "Saving form drafts", "Combining CSS files", "Running tests"], correctIndex: 0 },
    { question: "Which hook should not be called conditionally?", options: ["Hooks in general", "useEffect only", "useRef only", "useMemo only"], correctIndex: 0 },
    { question: "What does React Router handle?", options: ["Navigation between views", "Database validation", "Image optimization", "Package installation"], correctIndex: 0 },
    { question: "What is JSX?", options: ["JavaScript syntax that looks like HTML", "A database query language", "A CSS preprocessor", "A browser API"], correctIndex: 0 },
    { question: "Why are immutable updates important in React state?", options: ["They make changes easier to detect", "They reduce font size", "They prevent routing", "They replace props"], correctIndex: 0 }
  ],
  java: [
    { question: "What is Java?", options: ["An object-oriented programming language", "A database engine", "A CSS framework", "A file format"], correctIndex: 0 },
    { question: "Which keyword is used to create a subclass relationship?", options: ["extends", "implements", "imports", "returns"], correctIndex: 0 },
    { question: "What does an interface define?", options: ["A contract of methods", "A UI theme", "A SQL relation", "A memory cache"], correctIndex: 0 },
    { question: "What is the purpose of a constructor?", options: ["Initialize a new object", "Delete a class", "Compile bytecode", "Catch exceptions"], correctIndex: 0 },
    { question: "Which collection stores unique values in Java?", options: ["Set", "List", "Array", "Queue"], correctIndex: 0 },
    { question: "What does JVM stand for?", options: ["Java Virtual Machine", "Java Variable Method", "Joint Validation Module", "Java View Manager"], correctIndex: 0 },
    { question: "Which keyword prevents a class from being subclassed?", options: ["final", "static", "abstract", "public"], correctIndex: 0 },
    { question: "What is method overloading?", options: ["Same method name with different parameters", "Same method body in two files", "Using more memory", "Catching multiple exceptions"], correctIndex: 0 },
    { question: "What is method overriding?", options: ["Child class provides its own implementation", "A method with no return value", "A static method only", "A private method call"], correctIndex: 0 },
    { question: "What is the difference between JDK and JRE?", options: ["JDK includes development tools; JRE runs apps", "JRE includes compiler; JDK does not", "They are identical", "JDK is only for databases"], correctIndex: 0 },
    { question: "Which exception handling block runs whether or not an exception occurs?", options: ["finally", "catch", "throw", "throws"], correctIndex: 0 },
    { question: "What is autoboxing?", options: ["Automatic conversion between primitives and wrappers", "Packing classes into jars", "Sorting arrays automatically", "Running code in a loop"], correctIndex: 0 },
    { question: "Which collection preserves insertion order and allows duplicates?", options: ["List", "Set", "Map", "TreeSet"], correctIndex: 0 },
    { question: "What does the static keyword mean for a class member?", options: ["It belongs to the class, not each object", "It cannot be used", "It must be private", "It is always final"], correctIndex: 0 },
    { question: "What does hashCode() help with?", options: ["Placing objects efficiently in hash-based collections", "Rendering graphics", "Opening files", "Creating threads"], correctIndex: 0 },
    { question: "Which keyword is used to signal an exception from a method?", options: ["throws", "catch", "yield", "import"], correctIndex: 0 },
    { question: "What is garbage collection in Java?", options: ["Automatic memory cleanup", "Manual file deletion", "Bytecode signing", "Class loading"], correctIndex: 0 },
    { question: "Which feature allows one interface to reference different implementations?", options: ["Polymorphism", "Encapsulation", "Compilation", "Serialization"], correctIndex: 0 },
    { question: "What does the keyword synchronized help with?", options: ["Thread safety on shared code", "Faster compilation", "Better naming", "Database joins"], correctIndex: 0 },
    { question: "What is a package in Java?", options: ["A namespace for related classes", "A database schema", "A CSS module", "A file extension"], correctIndex: 0 }
  ],
  sql: [
    { question: "What does SQL stand for?", options: ["Structured Query Language", "Simple Queue Listing", "System Query Link", "Standard Question Language"], correctIndex: 0 },
    { question: "Which command is used to retrieve data from a table?", options: ["SELECT", "INSERT", "UPDATE", "DELETE"], correctIndex: 0 },
    { question: "What does a PRIMARY KEY do?", options: ["Uniquely identifies each row", "Stores duplicate rows", "Creates a view", "Hides columns"], correctIndex: 0 },
    { question: "What does a FOREIGN KEY do?", options: ["Links tables together", "Sorts rows alphabetically", "Deletes duplicates", "Creates indexes"], correctIndex: 0 },
    { question: "Which clause filters grouped results?", options: ["HAVING", "WHERE", "ORDER BY", "LIMIT"], correctIndex: 0 },
    { question: "Which join returns only matching rows from both tables?", options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"], correctIndex: 0 },
    { question: "Which join returns all rows from the left table and matches from the right?", options: ["LEFT JOIN", "INNER JOIN", "CROSS JOIN", "SELF JOIN"], correctIndex: 0 },
    { question: "What does GROUP BY do?", options: ["Groups rows for aggregation", "Sorts a table by name", "Deletes duplicates", "Creates a new database"], correctIndex: 0 },
    { question: "Which function counts rows?", options: ["COUNT()", "SUM()", "AVG()", "MIN()"], correctIndex: 0 },
    { question: "What is an index used for?", options: ["Speeding up lookups", "Encrypting data", "Creating backups", "Changing data types"], correctIndex: 0 },
    { question: "What does normalization aim to reduce?", options: ["Data redundancy", "Query length", "Table names", "Foreign keys"], correctIndex: 0 },
    { question: "Which clause sorts the result set?", options: ["ORDER BY", "GROUP BY", "HAVING", "DISTINCT"], correctIndex: 0 },
    { question: "What does DISTINCT do?", options: ["Removes duplicate rows from the result", "Sorts values descending", "Creates a join", "Deletes nulls"], correctIndex: 0 },
    { question: "Which statement modifies existing rows?", options: ["UPDATE", "CREATE", "DROP", "ALTER"], correctIndex: 0 },
    { question: "What is a transaction?", options: ["A group of SQL operations treated as one unit", "A table column", "A database backup", "A query shortcut"], correctIndex: 0 },
    { question: "What does ACID describe?", options: ["Transaction properties", "Index creation rules", "Query syntax", "Server permissions"], correctIndex: 0 },
    { question: "Which operator checks if a value is within a range?", options: ["BETWEEN", "LIKE", "IN", "IS NULL"], correctIndex: 0 },
    { question: "What does a NULL value mean?", options: ["Missing or unknown value", "Zero exactly", "Empty text only", "Duplicate record"], correctIndex: 0 },
    { question: "Which SQL object stores a saved query?", options: ["View", "Trigger", "Index", "Sequence"], correctIndex: 0 },
    { question: "Which clause limits the number of returned rows?", options: ["LIMIT", "HAVING", "UNION", "ASC"], correctIndex: 0 }
  ],
  "data-analytics": [
    { question: "What is the main goal of data analytics?", options: ["Turn data into useful insights", "Design logos", "Write operating systems", "Create passwords"], correctIndex: 0 },
    { question: "What is ETL?", options: ["Extract, Transform, Load", "Encode, Test, Launch", "Enter, Translate, Link", "Edit, Transfer, Log"], correctIndex: 0 },
    { question: "What does KPI stand for?", options: ["Key Performance Indicator", "Known Pattern Index", "Kernel Process Input", "Key Program Interface"], correctIndex: 0 },
    { question: "Which tool is commonly used for spreadsheet-based analysis?", options: ["Excel", "Figma", "Postman", "Docker"], correctIndex: 0 },
    { question: "What does a dashboard provide?", options: ["A visual summary of important metrics", "A database schema", "A server route", "A CSS reset"], correctIndex: 0 },
    { question: "What is a data outlier?", options: ["A value far from the rest of the data", "The average value", "A missing column", "A duplicate row"], correctIndex: 0 },
    { question: "What does correlation measure?", options: ["Relationship between variables", "The exact cause of an event", "File size", "Table joins"], correctIndex: 0 },
    { question: "Correlation does not imply what?", options: ["Causation", "Variation", "Sampling", "Visualization"], correctIndex: 0 },
    { question: "What is a pivot table used for?", options: ["Summarizing and rearranging data", "Writing SQL joins", "Formatting CSS", "Creating images"], correctIndex: 0 },
    { question: "What is descriptive analytics focused on?", options: ["What happened", "What must happen", "How to deploy", "How to compile"], correctIndex: 0 },
    { question: "What is predictive analytics focused on?", options: ["What is likely to happen next", "Only historical charts", "Font selection", "Database permissions"], correctIndex: 0 },
    { question: "What does data cleaning do?", options: ["Fix missing, incorrect, or inconsistent values", "Add random labels", "Delete all charts", "Encrypt tables"], correctIndex: 0 },
    { question: "Which chart is useful for comparing categories?", options: ["Bar chart", "Pie chart only", "Heat sink", "Line only"], correctIndex: 0 },
    { question: "What is sampling?", options: ["Selecting a subset of data", "Duplicating all data", "Changing the database password", "Compressing images"], correctIndex: 0 },
    { question: "Which term refers to large-scale data storage for analysis?", options: ["Data warehouse", "Cache line", "API gateway", "Frontend bundle"], correctIndex: 0 },
    { question: "What does OLAP emphasize?", options: ["Analytical queries and reporting", "Fast row inserts only", "Mobile UI design", "Password hashing"], correctIndex: 0 },
    { question: "What is a common use of SQL in analytics?", options: ["Querying and aggregating data", "Drawing mockups", "Editing videos", "Compiling TypeScript"], correctIndex: 0 },
    { question: "What is a cohort analysis used for?", options: ["Studying behavior of grouped users over time", "Counting CSS classes", "Making backups", "Generating passwords"], correctIndex: 0 },
    { question: "What does A/B testing compare?", options: ["Two versions to see which performs better", "Two databases with no data", "Two programming languages", "Two image formats"], correctIndex: 0 },
    { question: "Why is data storytelling important?", options: ["It helps communicate insights clearly", "It removes outliers automatically", "It creates indexes", "It replaces SQL"], correctIndex: 0 }
  ],
  python: [
    { question: "What is Python?", options: ["A high-level programming language", "A database server", "A CSS library", "A spreadsheet app"], correctIndex: 0 },
    { question: "Which data type is mutable and ordered?", options: ["List", "Tuple", "String", "Int"], correctIndex: 0 },
    { question: "Which data type is immutable?", options: ["Tuple", "List", "Set", "Dictionary"], correctIndex: 0 },
    { question: "What does pip do?", options: ["Installs Python packages", "Runs unit tests", "Creates classes", "Formats SQL"], correctIndex: 0 },
    { question: "What is a virtual environment used for?", options: ["Isolating project dependencies", "Rendering pages", "Compressing files", "Running CSS"], correctIndex: 0 },
    { question: "What does len() return?", options: ["The size of a collection or string", "The last element", "A boolean value", "A file path"], correctIndex: 0 },
    { question: "Which keyword starts a function definition?", options: ["def", "func", "let", "var"], correctIndex: 0 },
    { question: "What does a list comprehension create?", options: ["A new list from an expression", "A dictionary key", "A module import", "An exception handler"], correctIndex: 0 },
    { question: "What is the result of 3 // 2 in Python?", options: ["1", "1.5", "2", "0"], correctIndex: 0 },
    { question: "Which structure stores key-value pairs?", options: ["Dictionary", "List", "Tuple", "Range"], correctIndex: 0 },
    { question: "What does try/except handle?", options: ["Exceptions", "Loops", "Imports", "Classes"], correctIndex: 0 },
    { question: "What is the purpose of lambda?", options: ["Create a small anonymous function", "Import modules", "Define classes", "Open files"], correctIndex: 0 },
    { question: "What does enumerate() provide?", options: ["Index and value pairs", "Only keys", "Only values", "A sorted list"], correctIndex: 0 },
    { question: "What does zip() do?", options: ["Combines iterables element by element", "Unzips files", "Sorts lists", "Removes duplicates"], correctIndex: 0 },
    { question: "What is a generator?", options: ["An iterator that yields values lazily", "A class decorator", "A CSV writer", "A socket server"], correctIndex: 0 },
    { question: "What does the __name__ == '__main__' check do?", options: ["Runs code only when the file is executed directly", "Checks for syntax errors", "Creates a package", "Loads a module twice"], correctIndex: 0 },
    { question: "Which collection has unique unordered elements?", options: ["Set", "List", "Tuple", "String"], correctIndex: 0 },
    { question: "What does slicing like [1:4] do?", options: ["Returns a subset of items", "Deletes items", "Sorts items", "Counts items"], correctIndex: 0 },
    { question: "What does a decorator usually do?", options: ["Wraps or modifies a function", "Creates a module", "Writes SQL", "Starts a loop"], correctIndex: 0 },
    { question: "Which built-in function converts a string to an integer?", options: ["int()", "str()", "list()", "set()"], correctIndex: 0 }
  ],
  "ai-ml": [
    { question: "What is machine learning?", options: ["Systems learning patterns from data", "Writing CSS rules", "Drawing charts manually", "Storing passwords"], correctIndex: 0 },
    { question: "What is supervised learning?", options: ["Training with labeled data", "Training without any data", "Training only with images", "Training without output"], correctIndex: 0 },
    { question: "What is unsupervised learning?", options: ["Finding patterns in unlabeled data", "Using only labels", "Running SQL joins", "Compressing inputs"], correctIndex: 0 },
    { question: "What is overfitting?", options: ["Model learns training data too well and generalizes poorly", "Model is too simple", "Model has no features", "Model uses too little memory"], correctIndex: 0 },
    { question: "What is underfitting?", options: ["Model is too simple to capture patterns", "Model is too large", "Model is over-trained", "Model has perfect accuracy"], correctIndex: 0 },
    { question: "Why do we split data into train and test sets?", options: ["To evaluate generalization", "To rename columns", "To increase labels", "To delete missing values"], correctIndex: 0 },
    { question: "What does gradient descent do?", options: ["Optimizes model parameters", "Creates clusters", "Formats text", "Balances datasets"], correctIndex: 0 },
    { question: "What is a confusion matrix used for?", options: ["Evaluating classification results", "Storing images", "Measuring CPU speed", "Creating SQL indexes"], correctIndex: 0 },
    { question: "Which metric is useful for imbalanced classification?", options: ["Precision and recall", "File size", "Render time", "Screen width"], correctIndex: 0 },
    { question: "What does feature scaling help with?", options: ["Bringing features to a comparable range", "Increasing data duplicates", "Reducing labels", "Changing file formats"], correctIndex: 0 },
    { question: "What is regularization used for?", options: ["Reducing overfitting", "Increasing missing values", "Creating charts", "Training only on test data"], correctIndex: 0 },
    { question: "What is cross-validation?", options: ["Testing the model on multiple data splits", "Combining two datasets permanently", "Cleaning outliers only", "Generating random labels"], correctIndex: 0 },
    { question: "What is clustering?", options: ["Grouping similar data points", "Labeling rows manually", "Sorting by date", "Compressing vectors"], correctIndex: 0 },
    { question: "Which algorithm is commonly used for regression?", options: ["Linear regression", "K-means", "Naive Bayes", "Apriori"], correctIndex: 0 },
    { question: "What is an epoch in training?", options: ["One full pass through the training data", "A single prediction", "A type of feature", "A loss function"], correctIndex: 0 },
    { question: "What does a learning rate control?", options: ["Step size during optimization", "Number of layers", "Dataset size", "Label format"], correctIndex: 0 },
    { question: "What is bias-variance tradeoff about?", options: ["Balancing underfitting and overfitting", "Choosing chart colors", "Selecting database engines", "Finding null values"], correctIndex: 0 },
    { question: "What is a hyperparameter?", options: ["A setting chosen before training", "A model prediction", "A label in the dataset", "A loss value"], correctIndex: 0 },
    { question: "Why is feature engineering important?", options: ["It can improve model performance", "It removes all labels", "It replaces training", "It always reduces accuracy"], correctIndex: 0 },
    { question: "What does NLP focus on?", options: ["Working with human language data", "Sorting images only", "Building databases", "Serving CSS"], correctIndex: 0 }
  ],
  uiux: [
    { question: "What does UI stand for?", options: ["User Interface", "Unified Input", "Usability Index", "User Interaction"], correctIndex: 0 },
    { question: "What does UX stand for?", options: ["User Experience", "Unified Exchange", "Useful Extension", "User Execution"], correctIndex: 0 },
    { question: "What is a wireframe?", options: ["A low-fidelity layout plan", "A color palette", "A database model", "A CSS animation"], correctIndex: 0 },
    { question: "What is a prototype used for?", options: ["Testing an idea before final design", "Storing final code", "Replacing user research", "Publishing the app"], correctIndex: 0 },
    { question: "What is a persona in UX?", options: ["A fictional user profile", "A button style", "A logo concept", "A routing rule"], correctIndex: 0 },
    { question: "Why is user research important?", options: ["It helps understand user needs", "It removes all bugs", "It creates CSS grids", "It generates icons"], correctIndex: 0 },
    { question: "What is information architecture?", options: ["Organizing content and navigation", "Drawing pixel art", "Writing backend APIs", "Choosing server regions"], correctIndex: 0 },
    { question: "What does visual hierarchy guide?", options: ["What users notice first", "Database transactions", "Compiler warnings", "Package versions"], correctIndex: 0 },
    { question: "What is usability testing?", options: ["Observing users complete tasks", "Measuring internet speed", "Checking server logs", "Running SQL backups"], correctIndex: 0 },
    { question: "What is accessibility in design?", options: ["Making products usable for more people", "Adding more shadows", "Using only dark mode", "Reducing screen size"], correctIndex: 0 },
    { question: "Which concept improves readability of text against a background?", options: ["Contrast", "Padding", "Radius", "Opacity"], correctIndex: 0 },
    { question: "What is a design system?", options: ["Reusable components and guidelines", "A database backup plan", "A Java runtime", "A file compression tool"], correctIndex: 0 },
    { question: "What does affordance mean in design?", options: ["An element suggests how it should be used", "A file is affordable", "A screen is responsive", "A page loads fast"], correctIndex: 0 },
    { question: "What is a user flow?", options: ["The path a user takes to complete a task", "A gradient animation", "A SQL query path", "A browser cache"], correctIndex: 0 },
    { question: "Why are feedback states important?", options: ["They show users that actions were received", "They make buttons larger", "They reduce font size", "They replace navigation"], correctIndex: 0 },
    { question: "What is heuristic evaluation?", options: ["Reviewing a design using usability principles", "Counting pixels exactly", "Compressing wireframes", "Changing file types"], correctIndex: 0 },
    { question: "What is a microinteraction?", options: ["A small, focused interaction like a toggle or like button", "A full page redesign", "A database trigger", "A password reset email"], correctIndex: 0 },
    { question: "What is mobile-first design?", options: ["Designing for small screens first", "Ignoring desktop users", "Using only mobile apps", "Building without CSS"], correctIndex: 0 },
    { question: "What does Figma help designers do?", options: ["Create and collaborate on UI designs", "Deploy servers", "Write SQL queries", "Compile React code"], correctIndex: 0 },
    { question: "What is the main goal of UX?", options: ["Make products useful and easy to use", "Add as many features as possible", "Use only bright colors", "Minimize all text"], correctIndex: 0 }
  ]
};
function shuffle(items) {
  const clone = [...items];
  for (let index = clone.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [clone[index], clone[swapIndex]] = [clone[swapIndex], clone[index]];
  }
  return clone;
}
function getQuestionsForSlug(slug) {
  const seeds = questionBank[slug] ?? [];
  return shuffle(
    seeds.map((seed, index) => ({
      id: `${slug}-${index + 1}`,
      question: seed.question,
      options: [...seed.options],
      correctIndex: seed.correctIndex
    }))
  );
}
function TestPage() {
  const {
    slug
  } = Route$2.useParams();
  const {
    user,
    loading
  } = useAuth();
  const nav = useNavigate();
  const [internship, setInternship] = reactExports.useState(null);
  const [questions, setQuestions] = reactExports.useState([]);
  const [answers, setAnswers] = reactExports.useState({});
  const [submitted, setSubmitted] = reactExports.useState(null);
  const [timeLeft, setTimeLeft] = reactExports.useState(20 * 60);
  const [alreadyDone, setAlreadyDone] = reactExports.useState(false);
  const [notFound, setNotFound] = reactExports.useState(false);
  const [submitting, setSubmitting] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (!loading && !user) nav({
      to: "/login"
    });
  }, [user, loading, nav]);
  reactExports.useEffect(() => {
    if (!user) return;
    (async () => {
      setNotFound(false);
      setAlreadyDone(false);
      setSubmitted(null);
      setAnswers({});
      setQuestions([]);
      setTimeLeft(20 * 60);
      setSubmitting(false);
      const {
        data: int
      } = await supabase.from("internships").select("id, title").eq("slug", slug).single();
      if (!int) {
        setNotFound(true);
        return;
      }
      setInternship(int);
      const {
        data: existing
      } = await supabase.from("certificates").select("id").eq("user_id", user.id).eq("internship_id", int.id).maybeSingle();
      if (existing) {
        setAlreadyDone(true);
        return;
      }
      setQuestions(getQuestionsForSlug(slug));
    })();
  }, [user, slug]);
  reactExports.useEffect(() => {
    if (submitted || alreadyDone || !questions.length) return;
    const t = setInterval(() => setTimeLeft((s2) => {
      if (s2 <= 1) {
        clearInterval(t);
        submit();
        return 0;
      }
      return s2 - 1;
    }), 1e3);
    return () => clearInterval(t);
  }, [questions.length, submitted, alreadyDone]);
  async function submit() {
    if (submitted || submitting || !internship || !user || !questions.length) return;
    setSubmitting(true);
    const score = questions.reduce((total, question) => total + (answers[question.id] === question.correctIndex ? 1 : 0), 0);
    const passed = score >= 12;
    setSubmitted({
      score,
      passed
    });
    const {
      error
    } = await supabase.from("test_attempts").insert({
      user_id: user.id,
      internship_id: internship.id,
      score,
      total: questions.length,
      passed
    });
    setSubmitting(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    if (passed) toast.success(`Passed! ${score}/${questions.length}`);
    else toast.error(`${score}/${questions.length} — minimum 12 required`);
  }
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen flex items-center justify-center text-muted-foreground", children: "Loading..." });
  if (notFound) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto px-6 py-20 text-center glass rounded-3xl mt-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-16 w-16 mx-auto text-rose-400 mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-extrabold mb-3", children: "Assessment not found" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "This program does not have a configured question set yet." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/dashboard", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", children: "Back to Dashboard" }) })
      ] })
    ] });
  }
  if (alreadyDone) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto px-6 py-20 text-center glass rounded-3xl mt-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-16 w-16 mx-auto gold-text mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-extrabold mb-3", children: "You've already completed this internship" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "Each user can earn one certificate per program." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/certificate/$slug", params: {
          slug
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "bg-linear-to-r from-primary to-accent", children: "View Certificate" }) })
      ] })
    ] });
  }
  if (submitted) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-2xl mx-auto px-6 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        scale: 0.9,
        opacity: 0
      }, animate: {
        scale: 1,
        opacity: 1
      }, className: "glass rounded-3xl p-10 text-center", children: [
        submitted.passed ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-20 w-20 mx-auto text-emerald-400 mb-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-20 w-20 mx-auto text-rose-400 mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-extrabold mb-2", children: submitted.passed ? "Congratulations!" : "Not this time" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground mb-6", children: [
          "You scored ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: submitted.score }),
          " / ",
          questions.length
        ] }),
        submitted.passed ? /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/certificate/$slug", params: {
          slug
        }, search: {
          claim: 1
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "lg", className: "bg-linear-to-r from-amber-500 to-yellow-600 text-black", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-4 w-4 mr-1" }),
          " Claim Certificate"
        ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/dashboard", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", children: "Back to Dashboard" }) })
      ] }) })
    ] });
  }
  const m = Math.floor(timeLeft / 60), s = timeLeft % 60;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-6 py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-5 mb-6 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-primary uppercase tracking-widest", children: "Assessment" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-lg", children: internship?.title })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-lg font-bold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-5 w-5 text-primary" }),
          " ",
          String(m).padStart(2, "0"),
          ":",
          String(s).padStart(2, "0")
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-5", children: questions.map((q, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground mb-2", children: [
          "Question ",
          idx + 1,
          " of ",
          questions.length
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold mb-4", children: q.question }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-2", children: q.options.map((opt, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setAnswers((a) => ({
          ...a,
          [q.id]: i
        })), className: `text-left px-4 py-3 rounded-xl border transition ${answers[q.id] === i ? "border-primary bg-primary/10" : "border-border hover:border-primary/50"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground mr-2", children: [
            String.fromCharCode(65 + i),
            "."
          ] }),
          opt
        ] }, i)) })
      ] }, q.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 mt-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: submit, size: "lg", disabled: submitting || !questions.length, className: "flex-1 bg-linear-to-r from-primary to-accent h-12", children: submitting ? "Submitting..." : "Submit Test" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => {
          if (confirm("End the test now? Your current answers will be scored and this attempt will be saved.")) submit();
        }, size: "lg", variant: "outline", className: "sm:w-48 h-12", disabled: submitting, children: "End Test" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground text-center mt-3", children: 'Minimum 12 / 20 to pass. You can attempt only once. Use "End Test" to finish early.' })
    ] })
  ] });
}
export {
  TestPage as component
};
