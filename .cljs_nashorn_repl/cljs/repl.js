// Compiled by ClojureScript 1.10.520 {:target :nashorn}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__14823){
var map__14824 = p__14823;
var map__14824__$1 = (((((!((map__14824 == null))))?(((((map__14824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14824.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14824):map__14824);
var m = map__14824__$1;
var n = cljs.core.get.call(null,map__14824__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__14824__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__14826_14858 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__14827_14859 = null;
var count__14828_14860 = (0);
var i__14829_14861 = (0);
while(true){
if((i__14829_14861 < count__14828_14860)){
var f_14862 = cljs.core._nth.call(null,chunk__14827_14859,i__14829_14861);
cljs.core.println.call(null,"  ",f_14862);


var G__14863 = seq__14826_14858;
var G__14864 = chunk__14827_14859;
var G__14865 = count__14828_14860;
var G__14866 = (i__14829_14861 + (1));
seq__14826_14858 = G__14863;
chunk__14827_14859 = G__14864;
count__14828_14860 = G__14865;
i__14829_14861 = G__14866;
continue;
} else {
var temp__5735__auto___14867 = cljs.core.seq.call(null,seq__14826_14858);
if(temp__5735__auto___14867){
var seq__14826_14868__$1 = temp__5735__auto___14867;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14826_14868__$1)){
var c__4550__auto___14869 = cljs.core.chunk_first.call(null,seq__14826_14868__$1);
var G__14870 = cljs.core.chunk_rest.call(null,seq__14826_14868__$1);
var G__14871 = c__4550__auto___14869;
var G__14872 = cljs.core.count.call(null,c__4550__auto___14869);
var G__14873 = (0);
seq__14826_14858 = G__14870;
chunk__14827_14859 = G__14871;
count__14828_14860 = G__14872;
i__14829_14861 = G__14873;
continue;
} else {
var f_14874 = cljs.core.first.call(null,seq__14826_14868__$1);
cljs.core.println.call(null,"  ",f_14874);


var G__14875 = cljs.core.next.call(null,seq__14826_14868__$1);
var G__14876 = null;
var G__14877 = (0);
var G__14878 = (0);
seq__14826_14858 = G__14875;
chunk__14827_14859 = G__14876;
count__14828_14860 = G__14877;
i__14829_14861 = G__14878;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_14879 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_14879);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_14879)))?cljs.core.second.call(null,arglists_14879):arglists_14879));
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
var seq__14830_14880 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__14831_14881 = null;
var count__14832_14882 = (0);
var i__14833_14883 = (0);
while(true){
if((i__14833_14883 < count__14832_14882)){
var vec__14844_14884 = cljs.core._nth.call(null,chunk__14831_14881,i__14833_14883);
var name_14885 = cljs.core.nth.call(null,vec__14844_14884,(0),null);
var map__14847_14886 = cljs.core.nth.call(null,vec__14844_14884,(1),null);
var map__14847_14887__$1 = (((((!((map__14847_14886 == null))))?(((((map__14847_14886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14847_14886.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14847_14886):map__14847_14886);
var doc_14888 = cljs.core.get.call(null,map__14847_14887__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_14889 = cljs.core.get.call(null,map__14847_14887__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_14885);

cljs.core.println.call(null," ",arglists_14889);

if(cljs.core.truth_(doc_14888)){
cljs.core.println.call(null," ",doc_14888);
} else {
}


var G__14890 = seq__14830_14880;
var G__14891 = chunk__14831_14881;
var G__14892 = count__14832_14882;
var G__14893 = (i__14833_14883 + (1));
seq__14830_14880 = G__14890;
chunk__14831_14881 = G__14891;
count__14832_14882 = G__14892;
i__14833_14883 = G__14893;
continue;
} else {
var temp__5735__auto___14894 = cljs.core.seq.call(null,seq__14830_14880);
if(temp__5735__auto___14894){
var seq__14830_14895__$1 = temp__5735__auto___14894;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14830_14895__$1)){
var c__4550__auto___14896 = cljs.core.chunk_first.call(null,seq__14830_14895__$1);
var G__14897 = cljs.core.chunk_rest.call(null,seq__14830_14895__$1);
var G__14898 = c__4550__auto___14896;
var G__14899 = cljs.core.count.call(null,c__4550__auto___14896);
var G__14900 = (0);
seq__14830_14880 = G__14897;
chunk__14831_14881 = G__14898;
count__14832_14882 = G__14899;
i__14833_14883 = G__14900;
continue;
} else {
var vec__14849_14901 = cljs.core.first.call(null,seq__14830_14895__$1);
var name_14902 = cljs.core.nth.call(null,vec__14849_14901,(0),null);
var map__14852_14903 = cljs.core.nth.call(null,vec__14849_14901,(1),null);
var map__14852_14904__$1 = (((((!((map__14852_14903 == null))))?(((((map__14852_14903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14852_14903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14852_14903):map__14852_14903);
var doc_14905 = cljs.core.get.call(null,map__14852_14904__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_14906 = cljs.core.get.call(null,map__14852_14904__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_14902);

cljs.core.println.call(null," ",arglists_14906);

if(cljs.core.truth_(doc_14905)){
cljs.core.println.call(null," ",doc_14905);
} else {
}


var G__14907 = cljs.core.next.call(null,seq__14830_14895__$1);
var G__14908 = null;
var G__14909 = (0);
var G__14910 = (0);
seq__14830_14880 = G__14907;
chunk__14831_14881 = G__14908;
count__14832_14882 = G__14909;
i__14833_14883 = G__14910;
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

var seq__14854 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__14855 = null;
var count__14856 = (0);
var i__14857 = (0);
while(true){
if((i__14857 < count__14856)){
var role = cljs.core._nth.call(null,chunk__14855,i__14857);
var temp__5735__auto___14911__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___14911__$1)){
var spec_14912 = temp__5735__auto___14911__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_14912));
} else {
}


var G__14913 = seq__14854;
var G__14914 = chunk__14855;
var G__14915 = count__14856;
var G__14916 = (i__14857 + (1));
seq__14854 = G__14913;
chunk__14855 = G__14914;
count__14856 = G__14915;
i__14857 = G__14916;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__14854);
if(temp__5735__auto____$1){
var seq__14854__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14854__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__14854__$1);
var G__14917 = cljs.core.chunk_rest.call(null,seq__14854__$1);
var G__14918 = c__4550__auto__;
var G__14919 = cljs.core.count.call(null,c__4550__auto__);
var G__14920 = (0);
seq__14854 = G__14917;
chunk__14855 = G__14918;
count__14856 = G__14919;
i__14857 = G__14920;
continue;
} else {
var role = cljs.core.first.call(null,seq__14854__$1);
var temp__5735__auto___14921__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___14921__$2)){
var spec_14922 = temp__5735__auto___14921__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_14922));
} else {
}


var G__14923 = cljs.core.next.call(null,seq__14854__$1);
var G__14924 = null;
var G__14925 = (0);
var G__14926 = (0);
seq__14854 = G__14923;
chunk__14855 = G__14924;
count__14856 = G__14925;
i__14857 = G__14926;
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
var G__14927 = cljs.core.conj.call(null,via,t);
var G__14928 = cljs.core.ex_cause.call(null,t);
via = G__14927;
t = G__14928;
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
var map__14931 = datafied_throwable;
var map__14931__$1 = (((((!((map__14931 == null))))?(((((map__14931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14931):map__14931);
var via = cljs.core.get.call(null,map__14931__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__14931__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__14931__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__14932 = cljs.core.last.call(null,via);
var map__14932__$1 = (((((!((map__14932 == null))))?(((((map__14932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14932):map__14932);
var type = cljs.core.get.call(null,map__14932__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__14932__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__14932__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__14933 = data;
var map__14933__$1 = (((((!((map__14933 == null))))?(((((map__14933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14933.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14933):map__14933);
var problems = cljs.core.get.call(null,map__14933__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__14933__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__14933__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__14934 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__14934__$1 = (((((!((map__14934 == null))))?(((((map__14934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14934):map__14934);
var top_data = map__14934__$1;
var source = cljs.core.get.call(null,map__14934__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__14939 = phase;
var G__14939__$1 = (((G__14939 instanceof cljs.core.Keyword))?G__14939.fqn:null);
switch (G__14939__$1) {
case "read-source":
var map__14940 = data;
var map__14940__$1 = (((((!((map__14940 == null))))?(((((map__14940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14940.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14940):map__14940);
var line = cljs.core.get.call(null,map__14940__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__14940__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__14942 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__14942__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__14942,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__14942);
var G__14942__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__14942__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__14942__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__14942__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__14942__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__14943 = top_data;
var G__14943__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__14943,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__14943);
var G__14943__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__14943__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__14943__$1);
var G__14943__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__14943__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__14943__$2);
var G__14943__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__14943__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__14943__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__14943__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__14943__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__14944 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__14944,(0),null);
var method = cljs.core.nth.call(null,vec__14944,(1),null);
var file = cljs.core.nth.call(null,vec__14944,(2),null);
var line = cljs.core.nth.call(null,vec__14944,(3),null);
var G__14947 = top_data;
var G__14947__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__14947,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__14947);
var G__14947__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__14947__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__14947__$1);
var G__14947__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__14947__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__14947__$2);
var G__14947__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__14947__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__14947__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__14947__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__14947__$4;
}

break;
case "execution":
var vec__14948 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__14948,(0),null);
var method = cljs.core.nth.call(null,vec__14948,(1),null);
var file = cljs.core.nth.call(null,vec__14948,(2),null);
var line = cljs.core.nth.call(null,vec__14948,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__14948,source__$1,method,file,line,G__14939,G__14939__$1,map__14931,map__14931__$1,via,trace,phase,map__14932,map__14932__$1,type,message,data,map__14933,map__14933__$1,problems,fn,caller,map__14934,map__14934__$1,top_data,source){
return (function (p1__14930_SHARP_){
var or__4131__auto__ = (p1__14930_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__14930_SHARP_);
}
});})(vec__14948,source__$1,method,file,line,G__14939,G__14939__$1,map__14931,map__14931__$1,via,trace,phase,map__14932,map__14932__$1,type,message,data,map__14933,map__14933__$1,problems,fn,caller,map__14934,map__14934__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__14951 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__14951__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__14951,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__14951);
var G__14951__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__14951__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__14951__$1);
var G__14951__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__14951__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__14951__$2);
var G__14951__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__14951__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__14951__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__14951__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__14951__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14939__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__14955){
var map__14956 = p__14955;
var map__14956__$1 = (((((!((map__14956 == null))))?(((((map__14956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14956):map__14956);
var triage_data = map__14956__$1;
var phase = cljs.core.get.call(null,map__14956__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__14956__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__14956__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__14956__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__14956__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__14956__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__14956__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__14956__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__14958 = phase;
var G__14958__$1 = (((G__14958 instanceof cljs.core.Keyword))?G__14958.fqn:null);
switch (G__14958__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__14959_14968 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__14960_14969 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__14961_14970 = true;
var _STAR_print_fn_STAR__temp_val__14962_14971 = ((function (_STAR_print_newline_STAR__orig_val__14959_14968,_STAR_print_fn_STAR__orig_val__14960_14969,_STAR_print_newline_STAR__temp_val__14961_14970,sb__4661__auto__,G__14958,G__14958__$1,loc,class_name,simple_class,cause_type,format,map__14956,map__14956__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__14959_14968,_STAR_print_fn_STAR__orig_val__14960_14969,_STAR_print_newline_STAR__temp_val__14961_14970,sb__4661__auto__,G__14958,G__14958__$1,loc,class_name,simple_class,cause_type,format,map__14956,map__14956__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__14961_14970;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__14962_14971;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__14959_14968,_STAR_print_fn_STAR__orig_val__14960_14969,_STAR_print_newline_STAR__temp_val__14961_14970,_STAR_print_fn_STAR__temp_val__14962_14971,sb__4661__auto__,G__14958,G__14958__$1,loc,class_name,simple_class,cause_type,format,map__14956,map__14956__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__14959_14968,_STAR_print_fn_STAR__orig_val__14960_14969,_STAR_print_newline_STAR__temp_val__14961_14970,_STAR_print_fn_STAR__temp_val__14962_14971,sb__4661__auto__,G__14958,G__14958__$1,loc,class_name,simple_class,cause_type,format,map__14956,map__14956__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__14953_SHARP_){
return cljs.core.dissoc.call(null,p1__14953_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__14959_14968,_STAR_print_fn_STAR__orig_val__14960_14969,_STAR_print_newline_STAR__temp_val__14961_14970,_STAR_print_fn_STAR__temp_val__14962_14971,sb__4661__auto__,G__14958,G__14958__$1,loc,class_name,simple_class,cause_type,format,map__14956,map__14956__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__14959_14968,_STAR_print_fn_STAR__orig_val__14960_14969,_STAR_print_newline_STAR__temp_val__14961_14970,_STAR_print_fn_STAR__temp_val__14962_14971,sb__4661__auto__,G__14958,G__14958__$1,loc,class_name,simple_class,cause_type,format,map__14956,map__14956__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__14960_14969;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__14959_14968;
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
var _STAR_print_newline_STAR__orig_val__14963_14972 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__14964_14973 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__14965_14974 = true;
var _STAR_print_fn_STAR__temp_val__14966_14975 = ((function (_STAR_print_newline_STAR__orig_val__14963_14972,_STAR_print_fn_STAR__orig_val__14964_14973,_STAR_print_newline_STAR__temp_val__14965_14974,sb__4661__auto__,G__14958,G__14958__$1,loc,class_name,simple_class,cause_type,format,map__14956,map__14956__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__14963_14972,_STAR_print_fn_STAR__orig_val__14964_14973,_STAR_print_newline_STAR__temp_val__14965_14974,sb__4661__auto__,G__14958,G__14958__$1,loc,class_name,simple_class,cause_type,format,map__14956,map__14956__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__14965_14974;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__14966_14975;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__14963_14972,_STAR_print_fn_STAR__orig_val__14964_14973,_STAR_print_newline_STAR__temp_val__14965_14974,_STAR_print_fn_STAR__temp_val__14966_14975,sb__4661__auto__,G__14958,G__14958__$1,loc,class_name,simple_class,cause_type,format,map__14956,map__14956__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__14963_14972,_STAR_print_fn_STAR__orig_val__14964_14973,_STAR_print_newline_STAR__temp_val__14965_14974,_STAR_print_fn_STAR__temp_val__14966_14975,sb__4661__auto__,G__14958,G__14958__$1,loc,class_name,simple_class,cause_type,format,map__14956,map__14956__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__14954_SHARP_){
return cljs.core.dissoc.call(null,p1__14954_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__14963_14972,_STAR_print_fn_STAR__orig_val__14964_14973,_STAR_print_newline_STAR__temp_val__14965_14974,_STAR_print_fn_STAR__temp_val__14966_14975,sb__4661__auto__,G__14958,G__14958__$1,loc,class_name,simple_class,cause_type,format,map__14956,map__14956__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__14963_14972,_STAR_print_fn_STAR__orig_val__14964_14973,_STAR_print_newline_STAR__temp_val__14965_14974,_STAR_print_fn_STAR__temp_val__14966_14975,sb__4661__auto__,G__14958,G__14958__$1,loc,class_name,simple_class,cause_type,format,map__14956,map__14956__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__14964_14973;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__14963_14972;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14958__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
