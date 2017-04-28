@observer
class ItemsList extends Component {
    @observable new_item = {
        name: 'tablet',
        price: 2510
    };

    constructor (props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.new_item[e.target.name] = e.target.value;
    }

    render() {
        return <div>
            <div className='' onClick={e => ItemStore.add('new', 12332)}>add</div>
            <form>
                <h2>Add new Item</h2>
                <div>
                    <label>
                        name: <input className='' type='text' name='name' value={this.text} onChange={this.handleChange}/>
                    </label>
                </div>
                <div>
                    <label>
                        name: <input className='' type='text' name='name' value={this.text} onChange={this.handleChange}/>
                    </label>
                </div>
            </form>

            <ul>
                { ItemStore.items.map(item => <li key={item.id}>{item.name}, {item.price}</li>)}
            </ul>
        </div>
    }
}
