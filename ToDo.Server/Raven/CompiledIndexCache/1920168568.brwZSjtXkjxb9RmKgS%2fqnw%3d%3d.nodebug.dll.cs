using Raven.Abstractions;
using Raven.Database.Linq;
using System.Linq;
using System.Collections.Generic;
using System.Collections;
using System;
using Raven.Database.Linq.PrivateExtensions;
using Lucene.Net.Documents;
using System.Globalization;
using System.Text.RegularExpressions;
using Raven.Database.Indexing;

public class Index_Auto_ToDoTasks_BydateSortBydate : Raven.Database.Linq.AbstractViewGenerator
{
	public Index_Auto_ToDoTasks_BydateSortBydate()
	{
		this.ViewText = @"from doc in docs.ToDoTasks
select new {
	date = doc.date
}";
		this.ForEntityNames.Add("ToDoTasks");
		this.AddMapDefinition(docs => 
			from doc in ((IEnumerable<dynamic>)docs)
			where string.Equals(doc["@metadata"]["Raven-Entity-Name"], "ToDoTasks", System.StringComparison.InvariantCultureIgnoreCase)
			select new {
				date = doc.date,
				__document_id = doc.__document_id
			});
		this.AddField("date");
		this.AddField("__document_id");
		this.AddQueryParameterForMap("date");
		this.AddQueryParameterForMap("__document_id");
		this.AddQueryParameterForReduce("date");
		this.AddQueryParameterForReduce("__document_id");
	}
}
