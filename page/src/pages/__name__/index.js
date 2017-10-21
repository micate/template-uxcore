<% if (SPA) { %>
export default {
  path: '<%- name %>',
  title: '<%- name %>',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./Page<%- Name %>'));
    }, '<%- name %>');
  },
};<%}else{%>
import <%- Name %> from './<%- Name %>';

export default <%- Name %>;

<% } %>
