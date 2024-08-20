//for index.html and for nylas-scheduling
Partial<{
  timeslotSelected: (
    event: CustomEvent<Timeslot>,
    connector?: NylasSchedulerConnectorInterface | undefined
  ) => Promise<void>;
  timeslotConfirmed: (
    event: CustomEvent<Timeslot>,
    connector?: NylasSchedulerConnectorInterface | undefined
  ) => Promise<void>;
  dateSelected: (
    event: CustomEvent<Date>,
    connector?: NylasSchedulerConnectorInterface | undefined
  ) => Promise<void>;
  monthChanged: (
    event: CustomEvent<Date>,
    connector?: NylasSchedulerConnectorInterface | undefined
  ) => Promise<void>;
  timezoneChanged: (
    event: CustomEvent<string>,
    connector?: NylasSchedulerConnectorInterface | undefined
  ) => Promise<void>;
  languageChanged: (
    event: CustomEvent<string>,
    connector?: NylasSchedulerConnectorInterface | undefined
  ) => Promise<void>;
  bookingInfo: (
    event: CustomEvent<unknown>,
    connector?: NylasSchedulerConnectorInterface | undefined
  ) => Promise<void>;
  configSettings: (
    event: CustomEvent<unknown>,
    connector?: NylasSchedulerConnectorInterface | undefined
  ) => Promise<void>;
  nameChanged: (
    event: CustomEvent<string>,
    connector?: NylasSchedulerConnectorInterface | undefined
  ) => Promise<void>;
  emailChanged: (
    event: CustomEvent<string>,
    connector?: NylasSchedulerConnectorInterface | undefined
  ) => Promise<void>;
  backButtonClicked: (
    event: CustomEvent<boolean>,
    connector?: NylasSchedulerConnectorInterface | undefined
  ) => Promise<void>;
  detailsConfirmed: (
    event: CustomEvent<NylasSchedulerBookingData>,
    connector?: NylasSchedulerConnectorInterface | undefined
  ) => Promise<void>;
  bookingFormError: (
    event: CustomEvent<Partial<Notification>>,
    connector?: NylasSchedulerConnectorInterface | undefined
  ) => Promise<void>;
  bookingFormSubmitted: (
    event: CustomEvent<void>,
    connector?: NylasSchedulerConnectorInterface | undefined
  ) => Promise<void>;
  cancelBookingButtonClicked: (
    event: CustomEvent<{ bookingId: string }>,
    connector?: NylasSchedulerConnectorInterface | undefined
  ) => Promise<void>;
  rescheduleButtonClicked: (
    event: CustomEvent<{
      bookingId: string;
      errorHandler?: ((error: NylasSchedulerErrorResponse) => void) | undefined;
    }>,
    connector?: NylasSchedulerConnectorInterface | undefined
  ) => Promise<void>;
  rescheduleBookedEventError: (
    event: CustomEvent<NylasSchedulerErrorResponse>,
    connector?: NylasSchedulerConnectorInterface | undefined
  ) => Promise<void>;
  cancelBookedEventValidationError: (
    event: CustomEvent<{ error: { title: string; message: string } }>,
    connector?: NylasSchedulerConnectorInterface | undefined
  ) => Promise<void>;
  goBackButtonClicked: (
    event: CustomEvent<void>,
    connector?: NylasSchedulerConnectorInterface | undefined
  ) => Promise<void>;
  cancelBookingFormSubmitted: (
    event: CustomEvent<{
      bookingId: string;
      action: "reject" | "cancel";
      reason: string;
      errorHandler?: ((error: NylasSchedulerErrorResponse) => void) | undefined;
    }>,
    connector?: NylasSchedulerConnectorInterface | undefined
  ) => Promise<void>;
  cancelBookedEventError: (
    event: CustomEvent<NylasSchedulerErrorResponse>,
    connector?: NylasSchedulerConnectorInterface | undefined
  ) => Promise<void>;
  cancelBookingFormError: (
    event: CustomEvent<Partial<Notification>>,
    connector?: NylasSchedulerConnectorInterface | undefined
  ) => Promise<void>;
  closeCancelEventCardClicked: (
    event: CustomEvent<{
      errorHandler?: ((error: NylasSchedulerErrorResponse) => void) | undefined;
    }>,
    connector?: NylasSchedulerConnectorInterface | undefined
  ) => Promise<void>;
  cancelledEventCardError: (
    event: CustomEvent<NylasSchedulerErrorResponse>,
    connector?: NylasSchedulerConnectorInterface | undefined
  ) => Promise<void>;
}> & EventOverride<NylasSchedulerConnectorInterface>;
