// Compiled by ClojureScript 1.10.520 {:target :nashorn}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__14827){
var map__14828 = p__14827;
var map__14828__$1 = (((((!((map__14828 == null))))?(((((map__14828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14828.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14828):map__14828);
var m = map__14828__$1;
var n = cljs.core.get.call(null,map__14828__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__14828__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__14830_14862 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__14831_14863 = null;
var count__14832_14864 = (0);
var i__14833_14865 = (0);
while(true){
if((i__14833_14865 < count__14832_14864)){
var f_14866 = cljs.core._nth.call(null,chunk__14831_14863,i__14833_14865);
cljs.core.println.call(null,"  ",f_14866);


var G__14867 = seq__14830_14862;
var G__14868 = chunk__14831_14863;
var G__14869 = count__14832_14864;
var G__14870 = (i__14833_14865 + (1));
seq__14830_14862 = G__14867;
chunk__14831_14863 = G__14868;
count__14832_14864 = G__14869;
i__14833_14865 = G__14870;
continue;
} else {
var temp__5735__auto___14871 = cljs.core.seq.call(null,seq__14830_14862);
if(temp__5735__auto___14871){
var seq__14830_14872__$1 = temp__5735__auto___14871;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14830_14872__$1)){
var c__4550__auto___14873 = cljs.core.chunk_first.call(null,seq__14830_14872__$1);
var G__14874 = cljs.core.chunk_rest.call(null,seq__14830_14872__$1);
var G__14875 = c__4550__auto___14873;
var G__14876 = cljs.core.count.call(null,c__4550__auto___14873);
var G__14877 = (0);
seq__14830_14862 = G__14874;
chunk__14831_14863 = G__14875;
count__14832_14864 = G__14876;
i__14833_14865 = G__14877;
continue;
} else {
var f_14878 = cljs.core.first.call(null,seq__14830_14872__$1);
cljs.core.println.call(null,"  ",f_14878);


var G__14879 = cljs.core.next.call(null,seq__14830_14872__$1);
var G__14880 = null;
var G__14881 = (0);
var G__14882 = (0);
seq__14830_14862 = G__14879;
chunk__14831_14863 = G__14880;
count__14832_14864 = G__14881;
i__14833_14865 = G__14882;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_14883 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_14883);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_14883)))?cljs.core.second.call(null,arglists_14883):arglists_14883));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__14834_14884 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__14835_14885 = null;
var count__14836_14886 = (0);
var i__14837_14887 = (0);
while(true){
if((i__14837_14887 < count__14836_14886)){
var vec__14848_14888 = cljs.core._nth.call(null,chunk__14835_14885,i__14837_14887);
var name_14889 = cljs.core.nth.call(null,vec__14848_14888,(0),null);
var map__14851_14890 = cljs.core.nth.call(null,vec__14848_14888,(1),null);
var map__14851_14891__$1 = (((((!((map__14851_14890 == null))))?(((((map__14851_14890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14851_14890.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14851_14890):map__14851_14890);
var doc_14892 = cljs.core.get.call(null,map__14851_14891__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_14893 = cljs.core.get.call(null,map__14851_14891__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_14889);

cljs.core.println.call(null," ",arglists_14893);

if(cljs.core.truth_(doc_14892)){
cljs.core.println.call(null," ",doc_14892);
} else {
}


var G__14894 = seq__14834_14884;
var G__14895 = chunk__14835_14885;
var G__14896 = count__14836_14886;
var G__14897 = (i__14837_14887 + (1));
seq__14834_14884 = G__14894;
chunk__14835_14885 = G__14895;
count__14836_14886 = G__14896;
i__14837_14887 = G__14897;
continue;
} else {
var temp__5735__auto___14898 = cljs.core.seq.call(null,seq__14834_14884);
if(temp__5735__auto___14898){
var seq__14834_14899__$1 = temp__5735__auto___14898;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14834_14899__$1)){
var c__4550__auto___14900 = cljs.core.chunk_first.call(null,seq__14834_14899__$1);
var G__14901 = cljs.core.chunk_rest.call(null,seq__14834_14899__$1);
var G__14902 = c__4550__auto___14900;
var G__14903 = cljs.core.count.call(null,c__4550__auto___14900);
var G__14904 = (0);
seq__14834_14884 = G__14901;
chunk__14835_14885 = G__14902;
count__14836_14886 = G__14903;
i__14837_14887 = G__14904;
continue;
} else {
var vec__14853_14905 = cljs.core.first.call(null,seq__14834_14899__$1);
var name_14906 = cljs.core.nth.call(null,vec__14853_14905,(0),null);
var map__14856_14907 = cljs.core.nth.call(null,vec__14853_14905,(1),null);
var map__14856_14908__$1 = (((((!((map__14856_14907 == null))))?(((((map__14856_14907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14856_14907.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14856_14907):map__14856_14907);
var doc_14909 = cljs.core.get.call(null,map__14856_14908__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_14910 = cljs.core.get.call(null,map__14856_14908__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_14906);

cljs.core.println.call(null," ",arglists_14910);

if(cljs.core.truth_(doc_14909)){
cljs.core.println.call(null," ",doc_14909);
} else {
}


var G__14911 = cljs.core.next.call(null,seq__14834_14899__$1);
var G__14912 = null;
var G__14913 = (0);
var G__14914 = (0);
seq__14834_14884 = G__14911;
chunk__14835_14885 = G__14912;
count__14836_14886 = G__14913;
i__14837_14887 = G__14914;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__14858 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__14859 = null;
var count__14860 = (0);
var i__14861 = (0);
while(true){
if((i__14861 < count__14860)){
var role = cljs.core._nth.call(null,chunk__14859,i__14861);
var temp__5735__auto___14915__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___14915__$1)){
var spec_14916 = temp__5735__auto___14915__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_14916));
} else {
}


var G__14917 = seq__14858;
var G__14918 = chunk__14859;
var G__14919 = count__14860;
var G__14920 = (i__14861 + (1));
seq__14858 = G__14917;
chunk__14859 = G__14918;
count__14860 = G__14919;
i__14861 = G__14920;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__14858);
if(temp__5735__auto____$1){
var seq__14858__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14858__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__14858__$1);
var G__14921 = cljs.core.chunk_rest.call(null,seq__14858__$1);
var G__14922 = c__4550__auto__;
var G__14923 = cljs.core.count.call(null,c__4550__auto__);
var G__14924 = (0);
seq__14858 = G__14921;
chunk__14859 = G__14922;
count__14860 = G__14923;
i__14861 = G__14924;
continue;
} else {
var role = cljs.core.first.call(null,seq__14858__$1);
var temp__5735__auto___14925__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___14925__$2)){
var spec_14926 = temp__5735__auto___14925__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_14926));
} else {
}


var G__14927 = cljs.core.next.call(null,seq__14858__$1);
var G__14928 = null;
var G__14929 = (0);
var G__14930 = (0);
seq__14858 = G__14927;
chunk__14859 = G__14928;
count__14860 = G__14929;
i__14861 = G__14930;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__14931 = cljs.core.conj.call(null,via,t);
var G__14932 = cljs.core.ex_cause.call(null,t);
via = G__14931;
t = G__14932;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__14935 = datafied_throwable;
var map__14935__$1 = (((((!((map__14935 == null))))?(((((map__14935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14935):map__14935);
var via = cljs.core.get.call(null,map__14935__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__14935__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__14935__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__14936 = cljs.core.last.call(null,via);
var map__14936__$1 = (((((!((map__14936 == null))))?(((((map__14936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14936.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14936):map__14936);
var type = cljs.core.get.call(null,map__14936__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__14936__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__14936__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__14937 = data;
var map__14937__$1 = (((((!((map__14937 == null))))?(((((map__14937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14937):map__14937);
var problems = cljs.core.get.call(null,map__14937__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__14937__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__14937__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__14938 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__14938__$1 = (((((!((map__14938 == null))))?(((((map__14938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14938):map__14938);
var top_data = map__14938__$1;
var source = cljs.core.get.call(null,map__14938__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__14943 = phase;
var G__14943__$1 = (((G__14943 instanceof cljs.core.Keyword))?G__14943.fqn:null);
switch (G__14943__$1) {
case "read-source":
var map__14944 = data;
var map__14944__$1 = (((((!((map__14944 == null))))?(((((map__14944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14944):map__14944);
var line = cljs.core.get.call(null,map__14944__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__14944__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__14946 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__14946__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__14946,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__14946);
var G__14946__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__14946__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__14946__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__14946__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__14946__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__14947 = top_data;
var G__14947__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__14947,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__14947);
var G__14947__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__14947__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__14947__$1);
var G__14947__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__14947__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__14947__$2);
var G__14947__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__14947__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__14947__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__14947__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__14947__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__14948 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__14948,(0),null);
var method = cljs.core.nth.call(null,vec__14948,(1),null);
var file = cljs.core.nth.call(null,vec__14948,(2),null);
var line = cljs.core.nth.call(null,vec__14948,(3),null);
var G__14951 = top_data;
var G__14951__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__14951,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__14951);
var G__14951__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__14951__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__14951__$1);
var G__14951__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__14951__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__14951__$2);
var G__14951__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__14951__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__14951__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__14951__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__14951__$4;
}

break;
case "execution":
var vec__14952 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__14952,(0),null);
var method = cljs.core.nth.call(null,vec__14952,(1),null);
var file = cljs.core.nth.call(null,vec__14952,(2),null);
var line = cljs.core.nth.call(null,vec__14952,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__14952,source__$1,method,file,line,G__14943,G__14943__$1,map__14935,map__14935__$1,via,trace,phase,map__14936,map__14936__$1,type,message,data,map__14937,map__14937__$1,problems,fn,caller,map__14938,map__14938__$1,top_data,source){
return (function (p1__14934_SHARP_){
var or__4131__auto__ = (p1__14934_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__14934_SHARP_);
}
});})(vec__14952,source__$1,method,file,line,G__14943,G__14943__$1,map__14935,map__14935__$1,via,trace,phase,map__14936,map__14936__$1,type,message,data,map__14937,map__14937__$1,problems,fn,caller,map__14938,map__14938__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__14955 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__14955__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__14955,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__14955);
var G__14955__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__14955__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__14955__$1);
var G__14955__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__14955__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__14955__$2);
var G__14955__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__14955__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__14955__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__14955__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__14955__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14943__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__14959){
var map__14960 = p__14959;
var map__14960__$1 = (((((!((map__14960 == null))))?(((((map__14960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14960.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14960):map__14960);
var triage_data = map__14960__$1;
var phase = cljs.core.get.call(null,map__14960__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__14960__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__14960__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__14960__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__14960__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__14960__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__14960__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__14960__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__14962 = phase;
var G__14962__$1 = (((G__14962 instanceof cljs.core.Keyword))?G__14962.fqn:null);
switch (G__14962__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__14963_14972 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__14964_14973 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__14965_14974 = true;
var _STAR_print_fn_STAR__temp_val__14966_14975 = ((function (_STAR_print_newline_STAR__orig_val__14963_14972,_STAR_print_fn_STAR__orig_val__14964_14973,_STAR_print_newline_STAR__temp_val__14965_14974,sb__4661__auto__,G__14962,G__14962__$1,loc,class_name,simple_class,cause_type,format,map__14960,map__14960__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__14963_14972,_STAR_print_fn_STAR__orig_val__14964_14973,_STAR_print_newline_STAR__temp_val__14965_14974,sb__4661__auto__,G__14962,G__14962__$1,loc,class_name,simple_class,cause_type,format,map__14960,map__14960__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__14965_14974;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__14966_14975;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__14963_14972,_STAR_print_fn_STAR__orig_val__14964_14973,_STAR_print_newline_STAR__temp_val__14965_14974,_STAR_print_fn_STAR__temp_val__14966_14975,sb__4661__auto__,G__14962,G__14962__$1,loc,class_name,simple_class,cause_type,format,map__14960,map__14960__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__14963_14972,_STAR_print_fn_STAR__orig_val__14964_14973,_STAR_print_newline_STAR__temp_val__14965_14974,_STAR_print_fn_STAR__temp_val__14966_14975,sb__4661__auto__,G__14962,G__14962__$1,loc,class_name,simple_class,cause_type,format,map__14960,map__14960__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__14957_SHARP_){
return cljs.core.dissoc.call(null,p1__14957_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__14963_14972,_STAR_print_fn_STAR__orig_val__14964_14973,_STAR_print_newline_STAR__temp_val__14965_14974,_STAR_print_fn_STAR__temp_val__14966_14975,sb__4661__auto__,G__14962,G__14962__$1,loc,class_name,simple_class,cause_type,format,map__14960,map__14960__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__14963_14972,_STAR_print_fn_STAR__orig_val__14964_14973,_STAR_print_newline_STAR__temp_val__14965_14974,_STAR_print_fn_STAR__temp_val__14966_14975,sb__4661__auto__,G__14962,G__14962__$1,loc,class_name,simple_class,cause_type,format,map__14960,map__14960__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__14964_14973;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__14963_14972;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__14967_14976 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__14968_14977 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__14969_14978 = true;
var _STAR_print_fn_STAR__temp_val__14970_14979 = ((function (_STAR_print_newline_STAR__orig_val__14967_14976,_STAR_print_fn_STAR__orig_val__14968_14977,_STAR_print_newline_STAR__temp_val__14969_14978,sb__4661__auto__,G__14962,G__14962__$1,loc,class_name,simple_class,cause_type,format,map__14960,map__14960__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__14967_14976,_STAR_print_fn_STAR__orig_val__14968_14977,_STAR_print_newline_STAR__temp_val__14969_14978,sb__4661__auto__,G__14962,G__14962__$1,loc,class_name,simple_class,cause_type,format,map__14960,map__14960__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__14969_14978;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__14970_14979;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__14967_14976,_STAR_print_fn_STAR__orig_val__14968_14977,_STAR_print_newline_STAR__temp_val__14969_14978,_STAR_print_fn_STAR__temp_val__14970_14979,sb__4661__auto__,G__14962,G__14962__$1,loc,class_name,simple_class,cause_type,format,map__14960,map__14960__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__14967_14976,_STAR_print_fn_STAR__orig_val__14968_14977,_STAR_print_newline_STAR__temp_val__14969_14978,_STAR_print_fn_STAR__temp_val__14970_14979,sb__4661__auto__,G__14962,G__14962__$1,loc,class_name,simple_class,cause_type,format,map__14960,map__14960__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__14958_SHARP_){
return cljs.core.dissoc.call(null,p1__14958_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__14967_14976,_STAR_print_fn_STAR__orig_val__14968_14977,_STAR_print_newline_STAR__temp_val__14969_14978,_STAR_print_fn_STAR__temp_val__14970_14979,sb__4661__auto__,G__14962,G__14962__$1,loc,class_name,simple_class,cause_type,format,map__14960,map__14960__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__14967_14976,_STAR_print_fn_STAR__orig_val__14968_14977,_STAR_print_newline_STAR__temp_val__14969_14978,_STAR_print_fn_STAR__temp_val__14970_14979,sb__4661__auto__,G__14962,G__14962__$1,loc,class_name,simple_class,cause_type,format,map__14960,map__14960__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__14968_14977;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__14967_14976;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14962__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
