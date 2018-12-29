import { SvgIcon } from '../generic';
import HtmlToReact from 'html-to-react';
import MarkdownIt from 'markdown-it';
import PlaystyleIcon from '../playstyle/PlaystyleIcon';
import PropTypes from 'prop-types';
import React from 'react';
import { Tooltip } from '../generic/Tooltip';
import Trophy from '../Trophy';
import { features } from '../../../api/features';
import playstyles from '../../../api/playstyles/playstyles';
import { trophies } from '../../../api/trophies';
import { TooltipTitle } from '../generic/TooltipTitle';

const codeRegex = /(\[\w+:\w+\])/;
const markdown = new MarkdownIt({ linkify: true, breaks: true });
const HtmlToReactParser = HtmlToReact.Parser;
const htmlToReactParser = new HtmlToReactParser();
const processNodeDefinitions = new HtmlToReact.ProcessNodeDefinitions(React);
const processingInstructions = [
  {
    shouldProcessNode(node) {
      return node.type === 'text' && codeRegex.test(node.data);
    },
    processNode(node) {
      return node.data.split(codeRegex).map((code, index) => {
        // Trophy
        if (codeRegex.test(code)) {
          const parts = code.split(/\[(\w+):(\w+)\]/);

          switch (parts[1]) {
            case 'trophy':
              {
                const trophy = trophies[parts[2]];
                if (trophy) {
                  return (
                    <Trophy
                      forceColors={true}
                      iconStyle={{
                        width: 20,
                        height: 20
                      }}
                      key={`${index}-${trophy.name}`}
                      trophy={trophy}
                    />
                  );
                }
              }
              break;

            case 'badge':
              {
                const feature = features[parts[2]];

                if (feature && feature.badge) {
                  const badge = feature.badge;

                  return (
                    <span key={`${index}-${feature.name}`}>
                      <Tooltip
                        title={
                          <TooltipTitle
                            content={
                              <div>
                                {badge.description}
                                {badge.addition && (
                                  <span>
                                    <br />
                                    {badge.addition}
                                  </span>
                                )}
                              </div>
                            }
                            title={badge.title}
                          />
                        }
                      >
                        <SvgIcon
                          dangerouslySetInnerHTML={{ __html: badge.svg }}
                          style={{ width: 20, height: 20 }}
                          viewBox="0 0 512 512"
                        />
                      </Tooltip>
                    </span>
                  );
                }
              }
              break;

            case 'playstyle':
              {
                const playstyle = playstyles[parts[2]];

                if (playstyle) {
                  return (
                    <PlaystyleIcon
                      containerStyle={{ display: 'inline-block ' }}
                      key={`${index}-${playstyle.name}`}
                      playstyle={playstyle}
                    />
                  );
                }
              }
              break;
          }
        }
        return <span key={`${index}-span`}>{code}</span>;
      });
    }
  },
  {
    shouldProcessNode() {
      return true;
    },
    processNode: processNodeDefinitions.processDefaultNode
  }
];

const Content = ({ message }) => {
  const htmlMessage = markdown
    .render(message)
    .replace(new RegExp('<a ', 'g'), '<a target="_blank"');
  const content = htmlToReactParser.parseWithInstructions(
    htmlMessage,
    () => true,
    processingInstructions
  );

  return <div>{content}</div>;
};

Content.propTypes = {
  message: PropTypes.string
};

export default Content;
