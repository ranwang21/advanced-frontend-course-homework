import React, { Component } from 'react'
import Mock from 'mockjs'

export default class App extends Component {
    constructor () {
        super()
        this.state = {
            pageNumber: '',
            count: '',
            result: []
        }

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInputChange (event) {
        const name = event.target.name
        const value = event.target.value

        this.setState({ [name]: value }, () => console.log(this.state))
    }

    handleSubmit (event) {
        event.preventDefault()
        console.log(this.renderMockData())
    }

    renderMockData () {
        // 使用 Mock
        var Mock = require('mockjs')
        var data = Mock.mock({
            // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
            'list|1-10': [{
                // 属性 id 是一个自增数，起始值为 1，每次增 1
                'id|+1': 1
            }]
        })
        // 输出结果
        return JSON.stringify(data, null, 4)
    }

    render () {
        return (
            <div className='container'>
                <form method='GET'>
                    <div className='form-group'>
                        <label htmlFor='page-number'>Page</label>
                        <input value={this.state.pageNumber} onChange={this.handleInputChange} name='pageNumber' type='number' className='form-control' id='page-number' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='count'>Count</label>
                        <input value={this.state.count} onChange={this.handleInputChange} name='count' type='number' className='form-control' id='count' />
                    </div>
                    <button onClick={this.handleSubmit} type='submit' className='btn btn-primary'>Submit</button>
                </form>
                <pre>
                    {this.state.result}
                </pre>
            </div>
        )
    }
}
