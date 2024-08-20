//for scheduler-editor.html and scheduler-editor
Partial<{
  formSubmitted: (
    event: CustomEvent<void>,
    connector?: NylasSchedulerConfigConnectorInterface | undefined
  ) => Promise<void>;
  schedulerConfigChanged: (
    event: CustomEvent<SchedulerEventDetail>,
    connector?: NylasSchedulerConfigConnectorInterface | undefined
  ) => Promise<void>;
  cancelButtonClick: (
    event: CustomEvent<void>,
    connector?: NylasSchedulerConfigConnectorInterface | undefined
  ) => Promise<void>;
  previewButtonClicked: (
    event: CustomEvent<HTMLNylasEditorTabsElement>,
    connector?: NylasSchedulerConfigConnectorInterface | undefined
  ) => Promise<void>;
  schedulerEditorFormUpdated: (
    event: CustomEvent<{ value: string; name: string }>,
    connector?: NylasSchedulerConfigConnectorInterface | undefined
  ) => Promise<void>;
  initListConfigurations: (
    event: CustomEvent<{
      host: HTMLNylasListConfigurationsElement;
      cursor?: string | undefined;
    }>,
    connector?: NylasSchedulerConfigConnectorInterface | undefined
  ) => Promise<void>;
  createButtonClick: (
    event: CustomEvent<HTMLNylasListConfigurationsElement>,
    connector?: NylasSchedulerConfigConnectorInterface | undefined
  ) => Promise<void>;
  editButtonClick: (
    event: CustomEvent<{
      host: HTMLNylasListConfigurationsElement;
      configuration: Configuration;
    }>,
    connector?: NylasSchedulerConfigConnectorInterface | undefined
  ) => Promise<void>;
  deleteButtonClick: (
    event: CustomEvent<{
      host: HTMLNylasListConfigurationsElement;
      configuration: Configuration;
    }>,
    connector?: NylasSchedulerConfigConnectorInterface | undefined
  ) => Promise<void>;
}> & EventOverride<NylasSchedulerConfigConnectorInterface>;



