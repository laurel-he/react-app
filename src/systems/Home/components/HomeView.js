import * as React from 'react';
import ReactDOM from 'react-dom';
import { LocaleProvider, DatePicker, message } from 'antd';

export class HomeView extends React.Component{
    state = {
        date: null,
      };
      handleChange = date => {
        message.info(`您选择的日期是: ${date.format('YYYY-MM-DD')}`);
        this.setState({ date });
      };
      render() {
        const { date } = this.state;
        return (
          <LocaleProvider>
            <div style={{ width: 400, margin: '100px auto' }}>
              <DatePicker onChange={this.handleChange} />
              <div style={{ marginTop: 20 }}>
                当前日期：{date ? date.format('YYYY-MM-DD') : '未选择'}
              </div>
            </div>
          </LocaleProvider>
        );
        }
}