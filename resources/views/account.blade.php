@extends('layouts.app')
@section('content')
    <div id="account-page" data-account-id="{{$id}}" data-account-title="{{$title}}"></div>
    @if(session("welcome"))
        @include('welcome-modal.main')
    @endif
@endsection
