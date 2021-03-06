import {AlertConfig} from '../model/alert-config.model';
import {Alert} from '../model/alert.model';

export class AlertReducer {

  public static reduce(state: Alert[], action: { fn: Function, alert: Alert, config: AlertConfig }): Alert[] {
    return action.fn(state, {alert: action.alert, config: action.config});
  }

  public static add(state: Alert[], params: {alert: Alert, config: AlertConfig}): Alert[] {
    const output = [
      params.alert,
      ...state
    ];
    if (output.length > params.config.maxMessages) {
      output.pop();
    }
    return output;
  }

  public static remove(state: Alert[], params: {alert: Alert, config: AlertConfig}): Alert[] {
    return state.filter(alert => alert !== params.alert);
  }
}
