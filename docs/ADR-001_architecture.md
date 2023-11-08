# ADR-001: Our proposed architeture: Lucid principles +  Faas + Functional Composition

## Context
How to develop our applications to be maintanable and simple over time 

## Decision
We decided to apply different concepts taken from experience from different architectures and projects and added them 
upon lucid principles.

Lucid principles can be found here: https://docs.lucidarch.dev/principles/

The principles that we use are:

```
Features shall serve a single purpose
Favour creating as many of them as you wish rather than complicating a single one.

Features shall not call other features
Run as many jobs and operations as you like, but never a feature.

Jobs shall perform a single task
No job should do two things at a time, it will only get confusing the more you do it.

Jobs shall not call other jobs
This is your business logic, keep it concise by avoiding nesting hell.

Operations shall not call other operations
Run as many jobs as you like, but never any other unit.

Domains shouldn’t cross
When working within a domain, strive to preserve the boundaries by not using functionality from other domains. If you encounter a case where you should, consider Foundation, Operations and Features by rethinking your design.

Write code that humans can read
Machines will run it nonetheless, it is us who will suffer.
```

For more concepts of lucid see here

Features: https://docs.lucidarch.dev/features/
Operations: https://docs.lucidarch.dev/operations/
Jobs: https://docs.lucidarch.dev/jobs/

BEWARE: the concept of services in the lucid documentation is not what we mean in our architecture.

For us a service is a unit that may compose different features and it is callable from ports (http ex: fastify handlers, CLI, etc..).
Think of it like a FaaS (function as a service); a thing that you may call and it does its things.

----

We have added other principles to it:


If you need only to call a Feature as it is, without using data from other features, and without the need to do something in particular,
you can use features directly from the "ports" (ex: fastify handlers, hooks, or CLI, or even from other modules),
example:

```
fastify.get("example", async function(req, resp) {
        
        let input = req.body;
        
        let data = FeatureExample(input);
        
        // elaborate data
        
        return resp.send(data);

});
```
If you have a more complex use case, where you want to put together more features or do something more after features, you 
MUST use a service.

Services, which we mean a function that may call different features and is called by the framework (for example by fastifiy handlers),
example:

```
fastify.get("example", async function(req, resp) {
        
        let input = req.body;
        
        let data = ServiceExample(input);
        
        // elaborate data
        
        return resp.send(data);

});
```

We have also added a folder "drivers", in the root of the project. The meaning of the files inside it is to provide connections to external
world, like database or http clients. It can be used by Jobs, operations, features, services.

- the only way to talk to the application, or the module if it is a modular monolith, is using services or features. It is banned
to call a operation or job from another module.

ATTENTION: we decided not to threat framework thins and to leave it to be handled case by case. 

We want to be more framework agnostic as possibble inside our "core" or "business logic" or "everything inside src"




## Status
accepted on 08/11/2023

## Consequences
More maintanable code and more easy to reason about after returning on the project after a long time ago.