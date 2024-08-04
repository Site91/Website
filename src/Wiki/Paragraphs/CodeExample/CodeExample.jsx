import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './CodeExample.css';

function CodeExample() {
    /* Declaring code & output */
    const [code] = useState(`local table = {"apple", "word", "something"}
for i, v in pairs(table) do
    print("#   "..i.." &>", v)
end`);
    const [output] = useState(`#   1 &>    apple
#   2 &>    word
#   3 &>    something`);

    /* HTML code */
    return (
        <>
            <div className="code-div">
                <p className="code-explanation">
                    <span style={{color: '#54ffd1'}}>CODE</span>: This code is written in <span
                    style={{color: '#4242ad'}}>Lua</span> and it gives out the formatted table with the number of
                    variable and it&apos;s value.
                </p>
                <SyntaxHighlighter language="lua" style={tomorrow}>
                    {code}
                </SyntaxHighlighter>
                <p className="code-explanation">
                    <span style={{color: '#ff4f6d'}}>OUTPUT</span>: This is what the code above gives you in the console
                    when you run it.
                </p>
                <SyntaxHighlighter language="plaintext" style={tomorrow}>
                    {output}
                </SyntaxHighlighter>
            </div>
        </>
    );
}

export default CodeExample;