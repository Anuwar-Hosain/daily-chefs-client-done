import React from "react";
import "./Blog.css";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Blog = () => {
  return (
    <section ref={ref} className="size blog">
      <h1>Blog</h1>
      <div>
        <h2>
          Tell us the differences between uncontrolled and controlled
          components.
        </h2>
        <p>
          In the context of software engineering, the terms "uncontrolled
          components" and "controlled components" generally refer to different
          types of UI components in a user interface. Uncontrolled components
          are those whose state is managed entirely by the browser or by the
          component itself. In other words, their values are not controlled by
          React or any other JavaScript framework. Examples of uncontrolled
          components include native HTML form elements such as input, textarea,
          and select tags. With uncontrolled components, the form data is
          managed by the DOM rather than by React. On the other hand, controlled
          components are those whose state is managed by React or some other
          JavaScript framework. In other words, their values are controlled by
          JavaScript and they cannot change unless the state of the component is
          changed. Examples of controlled components include React's input,
          textarea, and select tags. With controlled components, the form data
          is managed by React, which makes it easier to validate, manipulate,
          and process the data. In general, controlled components provide more
          control and flexibility over the user interface compared to
          uncontrolled components. They also make it easier to implement complex
          UI behaviors such as form validation, input masking, and conditional
          rendering. However, uncontrolled components are sometimes preferred
          for simple forms or for cases where the UI behavior should be
          determined by the browser rather than by JavaScript.
        </p>
      </div>
      <div>
        <h2>How to validate React props using PropTypes?</h2>
        <p>
          To validate React props using PropTypes, you can use the PropTypes
          library that is included with React. Here are the steps to use
          PropTypes: Import the PropTypes library:Define the prop types for your
          component. You can do this by adding a propTypes property to your
          component class:In this example, we are defining three prop types for
          the MyComponent component: name, age, and email. The isRequired
          property makes sure that the name and age props are passed in as
          required props, while the email prop is optional. Pass the props to
          your component when you use it in another component:If you pass in a
          prop that does not match the defined prop types, you will see a
          warning in the console. This can be helpful for catching errors early
          in development. Using PropTypes to validate React props can help you
          catch errors early in development and make your code more robust and
          maintainable.
        </p>
      </div>
      <div>
        <h2>Tell us the difference between nodejs and express js.</h2>
        <p>
          Node.js and Express.js are both widely used in web development, but
          they serve different purposes. Node.js is a JavaScript runtime that
          allows developers to build server-side applications using JavaScript.
          It provides an event-driven architecture and an asynchronous I/O model
          that make it particularly well-suited for building scalable,
          high-performance, and real-time applications. Node.js has a large and
          active developer community, and it is used by many companies for
          building server-side applications. Express.js, on the other hand, is a
          web framework built on top of Node.js that makes it easier to build
          web applications. It provides a set of features and tools for building
          web applications, including routing, middleware, and template engines.
          Express.js is lightweight and flexible, which makes it a popular
          choice for building RESTful APIs, web applications, and other types of
          server-side applications. Here are some of the key differences between
          Node.js and Express.js: Node.js is a JavaScript runtime, while
          Express.js is a web framework built on top of Node.js. Node.js
          provides a low-level API for building server-side applications, while
          Express.js provides a higher-level API that makes it easier to build
          web applications. Node.js is more flexible and can be used for a wide
          range of applications, while Express.js is primarily focused on
          building web applications and APIs. Node.js is suitable for building
          scalable, high-performance, and real-time applications, while
          Express.js is suitable for building web applications quickly and
          easily. In summary, Node.js and Express.js are complementary
          technologies that are both useful for building web applications. While
          Node.js provides a powerful runtime for building server-side
          applications using JavaScript, Express.js provides a set of features
          and tools for building web applications on top of Node.js.
        </p>
      </div>
      <div>
        <h2>What is a custom hook, and why will you create a custom hook?</h2>
        <p>
          In React, a custom hook is a JavaScript function that starts with the
          word "use" and can be used to encapsulate reusable logic that can be
          shared across multiple components. Custom hooks allow developers to
          abstract away complex logic and state management into a single,
          reusable function that can be used by multiple components. Custom
          hooks are useful in situations where you have some complex logic that
          needs to be shared across multiple components, or when you want to
          reuse some common functionality between different parts of your
          application. Here are some reasons why you might want to create a
          custom hook: Reuse logic between components: If you find yourself
          copying and pasting the same code between multiple components, it's a
          good indication that you should extract that logic into a custom hook.
          Encapsulate complex logic: If you have some complex logic that
          involves state management or other side effects, a custom hook can
          help you encapsulate that logic and make it easier to reason about.
          Improve code organization: Custom hooks can help you organize your
          code by separating concerns and keeping related functionality together
          in a single file. Improve code reuse: By creating custom hooks, you
          can make it easier to reuse code across multiple projects, which can
          save you time and effort in the long run.
        </p>
      </div>
      <div className="App">
        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
        </Pdf>
      </div>
    </section>
  );
};

export default Blog;
