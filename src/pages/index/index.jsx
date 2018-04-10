import { React, observer } from '!/app';
import { ExampleService } from '!/services';
import { ExampleStore } from '!/stores';
import { ListItem } from '!/uikit'

@observer
export default class Index extends React.Component {
    componentDidMount = () => {
        ExampleService.getItems();
    }

    render = () => {
        return (
            <React.Fragment>
                <div>
                    { ExampleStore.items.map(item => <ListItem key={item.id} name={item.name}/>)}
                </div>
                <pre>
                    <br/>
                    <code>
                        observable <br/>
                        ExampleStore.items <br/>
                        {JSON.stringify(ExampleStore.items,null,2)}
                    </code>
                    <br/><br/>
                    <code>
                        computed using lodash <br/>
                        ExampleStore.itemById <br/>
                        {JSON.stringify(ExampleStore.itemById,null,2)}
                    </code>
                </pre>
            </React.Fragment>
        )
    }
}
