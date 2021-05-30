import { Box, Grid } from "@material-ui/core";
import ReactLinkify from "react-linkify";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  darcula,
  duotoneDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { CATEGORIES, COLUMN_SIZE_DICT } from "../Const";

const Contents = ({ languages, contents }) => {
  console.log("contents in Contents");
  console.log(contents);
  const columnSize = COLUMN_SIZE_DICT[languages.length];

  function getSection(lang, category) {
    let codeContent = null;
    let outputContent = null;
    let descriptionContent = null;
    if (lang in contents && category in contents[lang]) {
      const sectionContent = contents[lang][category];
      if ("code" in sectionContent) {
        codeContent = sectionContent["code"]["raw"];
        const firstNewLineIdx = codeContent.indexOf("\n");
        codeContent = codeContent.substring(firstNewLineIdx + 1);
        const lastIndex = codeContent.lastIndexOf("```");
        codeContent = codeContent.substring(0, lastIndex);
      }
      if ("output" in sectionContent) {
        outputContent = sectionContent["output"]["raw"];
        const firstNewLineIdx = outputContent.indexOf("\n");
        outputContent = outputContent.substring(firstNewLineIdx + 1);
        const lastIndex = outputContent.lastIndexOf("```");
        outputContent = outputContent.substring(0, lastIndex);
      }
      if ("description" in sectionContent) {
        descriptionContent = sectionContent["description"]["raw"];
      }
    }
    return (
      <Grid item xs={columnSize} key={lang}>
        {codeContent != null ? (
          <SyntaxHighlighter language={lang} style={darcula}>
            {codeContent}
          </SyntaxHighlighter>
        ) : (
          <p>N/A</p>
        )}
        {outputContent != null ? (
          <SyntaxHighlighter style={duotoneDark}>
            {outputContent}
          </SyntaxHighlighter>
        ) : (
          <div></div>
        )}
        {descriptionContent != null ? (
          <pre>
            <ReactLinkify
              properties={{ target: "_blank" /*TODO: Make it work*/ }}
            >
              {descriptionContent}
            </ReactLinkify>
          </pre>
        ) : (
          <div></div>
        )}
      </Grid>
    );
  }

  return (
    <>
      <Grid container spacing={1}>
        {languages.map((language, i) => (
          <Grid key={i} item xs={columnSize}>
            <h4>{language}</h4>
          </Grid>
        ))}
      </Grid>
      <div className="js-toc-content">
        {CATEGORIES.map((category, i) => (
          <Box key={i}>
            {category.indexOf(".") === category.lastIndexOf(".") ? (
              <h2 id={category}>{category}</h2>
            ) : (
              <>
                <h3 id={category}>{category}</h3>
                <Grid container spacing={1}>
                  {languages.map((language) => getSection(language, category))}
                </Grid>
              </>
            )}
          </Box>
        ))}
      </div>
    </>
  );
};

export default Contents;