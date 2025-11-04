export function uid(){ return 'id_' + Math.random().toString(36).slice(2,9) }
export function formatDate(d){ try { return new Date(d).toLocaleDateString() } catch { return d } }
