import { FlexPlugin } from 'flex-plugin';
import React from 'react';
import CustomTaskListComponent from './CustomTaskListComponent';

const PLUGIN_NAME = 'SamplePlugin';

export default class SamplePlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
    init(flex, manager) {
        console.log("testing hahahaha");
      /*  flex.TaskCanvas.Content.add(<p>Hello</p>);
    flex.AgentDesktopView.Panel1.Content.add(
      <CustomTaskListComponent key="demo-component" />,
      {
        sortOrder: -1,
      }
    );*/
        flex.AgentDesktopView.Panel2.Content.add(
            <p key="hello">Hello</p>
        );
      flex.CRMContainer.defaultProps.uriCallback = (task) => {
          console.log(task ? task.sid : "task not defined");
         // return task ? "https://www.bing.com/search?q=" + task.attributes.name : "https://bing.com/";
    }
  }
}
