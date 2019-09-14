@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="mb-4 border-bottom">
                <p class="font-weight-bold">あなたとシェアされている{{ env("KAKEIBO") }}</p>
            </div>
            <div id="account-form" class="mb-4"></div>
            <div class="bg-light rounded p-4">
                <div id="account-deck"></div>
            </div>
        </div>
    </div>
</div>
@endsection
