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

public class Index_Auto_ToDoTasks_BydateAnddateCreatedSortBydatedateCreated : Raven.Database.Linq.AbstractViewGenerator
{
	public Index_Auto_ToDoTasks_BydateAnddateCreatedSortBydatedateCreated()
	{
		this.ViewText = @"from doc in docs.ToDoTasks
select new {
	dateCreated = doc.dateCreated,
	date = doc.date
}";
		this.ForEntityNames.Add("ToDoTasks");
		this.AddMapDefinition(docs => 
			from doc in ((IEnumerable<dynamic>)docs)
			where string.Equals(doc["@metadata"]["Raven-Entity-Name"], "ToDoTasks", System.StringComparison.InvariantCultureIgnoreCase)
			select new {
				dateCreated = doc.dateCreated,
				date = doc.date,
				__document_id = doc.__document_id
			});
		this.AddField("dateCreated");
		this.AddField("date");
		this.AddField("__document_id");
		this.AddQueryParameterForMap("dateCreated");
		this.AddQueryParameterForMap("date");
		this.AddQueryParameterForMap("__document_id");
		this.AddQueryParameterForReduce("dateCreated");
		this.AddQueryParameterForReduce("date");
		this.AddQueryParameterForReduce("__document_id");
	}
}
