class Solution {
	bellmanFord(V, edges, src) {
		// code here
		let dist = []
		let INF = 100000000
		
		for (let i = 0 ; i <V; i++) {
			dist[i] = INF
		}
		
		dist[src] = 0
		
		for (let i = 0; i<V - 1; i++) {
			for (let edge of edges) {
				let [u, v, w] = edge
				if (dist[u] !== INF && dist[u]+w < dist[v]) {
					dist[v] = dist[u]+w
				}
			}
		}
		
		for (let edge of edges) {
			let [u, v, w] = edge
			if (dist[u] !== INF && dist[u]+w < dist[v]) {
				return [-1]
			}
		}
		
		return dist
	}
}
