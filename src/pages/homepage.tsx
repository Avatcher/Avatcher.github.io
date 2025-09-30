import Layout from "./layout";
import "./homepage.css"

export default function Homepage() {
    return <Layout>
      <div id="welcome-banner">
        <p>
          Hello,<br />
          I'm Avatcher<span className="typing-cursor"></span>
        </p>
      </div>

      <div id="content">
        <h1>What's this?</h1>
        <p>
          This is my personal website, where you can learn
          more about me or gain my contact details. But you might
          still have the question: "<i>Who</i>'s Avatcher?" 
        </p>
        <p>
          Avatcher isn't a real name (who could've thought!),
          but a nickname. What does it mean? Well... That's
          where it becomes complicated.
        </p>
        <p>
          You see: someone, who's now called by this name,
          used to take an interest in Minecraft commands. Having
          a nickname starting with letter "A", the first letter
          of the alphabet, would put that someone on the very top
          of the names suggestions that popped up, as some command
          was typed out. This way it would be very easy to pick
          yourself and save some time. Since then I'm not interested
          in Minecraft commands or datapacks anymore, yet the
          name still plays its function. Everywhere I appear -
          I'm one of the first, be it other games, Discord, etc.
        </p>
        <p>
          The nickname is pronounced "A-va-cha" with "ch" as
          in <u>ch</u>ess.
        </p>
      </div>
    </Layout>
}