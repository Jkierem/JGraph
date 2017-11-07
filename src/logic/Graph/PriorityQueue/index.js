class PriorityQueue{
		constructor( cmp, items = [] ){
			this.items = items
			this.cmp = cmp
		}

		sort = () => {
			if( this.cmp === undefined ){
				this.items.sort()
			}else{
				this.items.sort(this.cmp)
			}
		}

		push = ( item ) => {
			this.items.push(item)
			this.sort()
		}

		front = () => {
			return this.items.shift()
		}
}

export default PriorityQueue;
